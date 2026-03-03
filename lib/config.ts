/**
 * @fileOverview PAINEL DE CONTROLE CENTRAL - NB PLAY IPTV
 * Altere os valores abaixo para atualizar o site inteiro instantaneamente.
 */

export const siteConfig = {
  name: "NB Play IPTV",
  owner: "Dr. Neilton Brito",
  siteUrl: "https://nbplayiptv.com.br",
  
  // SUA FOTO OU LOGO
  logoUrl: "https://storage.googleapis.com/fetch-api-7901.appspot.com/a9c13e55-0810-4f57-893d-4299b8417531.png",
  
  // CONTATOS E REDES SOCIAIS
  whatsappNumber: "5568999077685",
  whatsappMessage: "Olá! Gostaria de saber mais sobre os planos do NB Play IPTV.",
  instagramUrl: "https://www.instagram.com/dr.neilton_brito?igsh=MXE1dHIwNmU0czJ1aw%3D%3D&utm_source=qr",
  instagramHandle: "@dr.neilton_brito",
  
  // INFORMAÇÕES DE SUPORTE
  supportHours: "08:00 às 23:00",
  verifiedClients: "+10.000",
  
  // PAGAMENTO (DADOS DO GATEWAY CIBRA)
  walletId: "6dc344f6-04e7-4836-b48a-922fe15f76bc", 
  pixKey: "+5568999077685", // Chave PIX (Telefone) para recebimento direto
  // Chaves de API (Gateway) - Mantidas para referência futura se houver integração via API
  gatewayPublicKey: "a36a022d5525cda207b97113272b71d9b410e4948a637f1b8bca",
  gatewaySecretKey: "564aa554782723e0b99f",
  pixGatewayName: "Manual", // Alterado para Manual enquanto não há integração direta
  webhookEndpoint: "/api/webhook/cibra",

  // CONFIGURAÇÃO DOS PLANOS
  plans: [
    {
      name: "Plano Mensal",
      price: "R$ 24,99",
      period: "/mês",
      features: ["Acesso em 1 tela", "Canais em 4K/Full HD", "Grade completa de esportes", "Suporte via WhatsApp", "Liberação em 5 minutos"],
      buttonText: "Assinar Agora",
      highlight: false
    },
    {
      name: "Plano Trimestral",
      price: "R$ 69,99",
      period: "/3 meses",
      features: ["Desconto de 7%", "Canais 4K & On Demand", "Filmes e Séries Premium", "Suporte VIP", "Liberação Imediata"],
      buttonText: "Assinar Trimestral",
      highlight: false
    },
    {
      name: "Plano Anual",
      price: "R$ 249,99",
      period: "/ano",
      features: ["Acesso em 2 telas simultâneas", "Melhor Preço: R$ 20,83/mês", "Canais 4K & On Demand", "Filmes e Séries Premium", "Suporte VIP Prioritário", "Bonus: App Exclusivo"],
      buttonText: "Economizar 40%",
      highlight: true,
      badge: "O MAIS ASSINADO"
    }
  ]
};
