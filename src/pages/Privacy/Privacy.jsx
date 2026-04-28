import SEOHead from '@/components/common/SEOHead/SEOHead'
import Container from '@/components/layout/Container/Container'
import styles from './Privacy.module.css'

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Política de Privacidade"
        description="Política de privacidade do portfólio de Wendel Faria. Saiba como seus dados são tratados."
        canonical="/privacidade"
      />

      <section className={styles.hero}>
        <Container>
          <h1 className={styles.heading}>Política de Privacidade</h1>
          <p className={styles.updated}>Última atualização: abril de 2026</p>
        </Container>
      </section>

      <section className={styles.section}>
        <Container>
          <div className={styles.prose}>
            <h2>1. Quem somos</h2>
            <p>
              Este site é o portfólio profissional de <strong>Wendel Faria</strong>, desenvolvedor web freelancer. Nosso objetivo é apresentar serviços de criação de landing pages e possibilitar o contato de potenciais clientes.
            </p>

            <h2>2. Dados coletados</h2>
            <p>
              Este site <strong>não possui formulários de contato</strong> nesta versão. Portanto, não coletamos dados pessoais diretamente pelo site.
            </p>
            <p>
              Se você entrar em contato via WhatsApp ou e-mail, os dados fornecidos (nome, telefone, e-mail, mensagem) serão utilizados exclusivamente para responder à sua solicitação e jamais compartilhados com terceiros.
            </p>

            <h2>3. Cookies e analytics</h2>
            <p>
              Podemos utilizar ferramentas de analytics (como Google Analytics ou Plausible) para entender como os visitantes navegam no site. Essas ferramentas podem coletar dados como páginas visitadas, tempo de permanência e origem do acesso, de forma agregada e anônima.
            </p>
            <p>
              Você pode desativar cookies no seu navegador a qualquer momento sem prejuízo à navegação.
            </p>

            <h2>4. Links externos</h2>
            <p>
              Este site pode conter links para redes sociais (GitHub, LinkedIn, Instagram) e WhatsApp. Ao clicar nesses links, você será direcionado para plataformas de terceiros, que possuem suas próprias políticas de privacidade.
            </p>

            <h2>5. Seus direitos (LGPD)</h2>
            <p>
              Conforme a Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você tem direito a:
            </p>
            <ul>
              <li>Solicitar a confirmação de quais dados seus foram coletados</li>
              <li>Solicitar a correção ou exclusão desses dados</li>
              <li>Revogar o consentimento a qualquer momento</li>
            </ul>
            <p>
              Para exercer seus direitos, entre em contato pelo e-mail indicado na página de contato.
            </p>

            <h2>6. Segurança</h2>
            <p>
              Adotamos as melhores práticas de segurança: HTTPS, headers de segurança HTTP e ausência de armazenamento de dados sensíveis no frontend.
            </p>

            <h2>7. Contato</h2>
            <p>
              Dúvidas sobre esta política? Entre em contato pelo e-mail ou WhatsApp disponíveis na <a href="/contato">página de contato</a>.
            </p>
          </div>
        </Container>
      </section>
    </>
  )
}
