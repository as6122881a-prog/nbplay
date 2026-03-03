import { NextResponse } from 'next/server';

/**
 * Endpoint de Webhook para integração com o Gateway CIBRA.
 * Este endpoint recebe notificações de pagamento aprovado.
 */
export async function POST(request: Request) {
  try {
    // Tenta ler o corpo da requisição (JSON enviado pela CIBRA)
    const body = await request.json();
    
    // Log para depuração (visível nos logs do servidor)
    console.log('--- NOTIFICAÇÃO CIBRA RECEBIDA ---');
    console.log('Dados:', JSON.stringify(body, null, 2));

    /**
     * IMPORTANTE: A CIBRA exige que o endpoint responda com Status 200 
     * rapidamente para confirmar que a mensagem foi entregue.
     */
    return NextResponse.json(
      { 
        status: 'success', 
        message: 'Webhook recebido com sucesso',
        timestamp: new Date().toISOString()
      }, 
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao processar webhook CIBRA:', error);
    
    // Mesmo em caso de erro, às vezes é bom retornar 200 para evitar retentativas infinitas,
    // mas aqui retornamos 400 se o JSON for inválido.
    return NextResponse.json(
      { status: 'error', message: 'Formato de requisição inválido' }, 
      { status: 400 }
    );
  }
}

/**
 * Permite requisições do tipo GET para testar se o endpoint está online no navegador.
 */
export async function GET() {
  return NextResponse.json(
    { 
      status: 'online', 
      message: 'Endpoint de Webhook NB Play está ativo e aguardando conexões POST da CIBRA.' 
    }, 
    { status: 200 }
  );
}
