/**
 * Gera o payload do PIX (EMVCo BR Code) para pagamento estático.
 * Baseado no padrão do Banco Central do Brasil.
 */
export function generatePixPayload(
  pixKey: string,
  merchantName: string,
  merchantCity: string,
  transactionAmount: string,
  transactionId: string = "***"
): string {
  // Limpeza e normalização dos dados
  const key = pixKey.replace(/\s/g, '');
  const name = merchantName.substring(0, 25).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
  const city = merchantCity.substring(0, 15).normalize('NFD').replace(/[\u0300-\u036f]/g, "").toUpperCase();
  const amount = transactionAmount.replace('R$', '').trim().replace(',', '.'); // "R$ 1,50" -> "1.50"
  
  // Função auxiliar para formatar campos TLV (Tag-Length-Value)
  const formatField = (id: string, value: string) => {
    const len = value.length.toString().padStart(2, '0');
    return `${id}${len}${value}`;
  };

  // Montagem do Payload
  let payload = 
    formatField("00", "01") + // Payload Format Indicator
    formatField("26", 
      formatField("00", "BR.GOV.BCB.PIX") + 
      formatField("01", key) // Chave PIX
    ) +
    formatField("52", "0000") + // Merchant Category Code
    formatField("53", "986") + // Transaction Currency (BRL)
    formatField("54", amount) + // Transaction Amount
    formatField("58", "BR") + // Country Code
    formatField("59", name) + // Merchant Name
    formatField("60", city) + // Merchant City
    formatField("62", 
      formatField("05", transactionId) // Reference Label (TxID)
    ) +
    "6304"; // CRC16 Placeholder

  // Cálculo do CRC16
  const crc = calculateCRC16(payload);
  
  return payload + crc;
}

/**
 * Calcula o CRC-16 (CCITT-FALSE) do payload.
 */
function calculateCRC16(payload: string): string {
  let crc = 0xFFFF;
  const polynomial = 0x1021;

  for (let i = 0; i < payload.length; i++) {
    let code = payload.charCodeAt(i);
    crc ^= (code << 8);
    for (let j = 0; j < 8; j++) {
      if ((crc & 0x8000) !== 0) {
        crc = ((crc << 1) ^ polynomial) & 0xFFFF;
      } else {
        crc = (crc << 1) & 0xFFFF;
      }
    }
  }

  return crc.toString(16).toUpperCase().padStart(4, '0');
}
