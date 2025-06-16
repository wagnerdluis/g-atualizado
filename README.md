# G.LIONS - Website Institucional

Site institucional da G.LIONS, empresa especializada em consórcios e financiamentos imobiliários.

## 🚀 Deploy na Cloudflare Pages

### Método 1: Deploy Automático via Git

1. **Conecte seu repositório:**
   - Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
   - Clique em "Create a project"
   - Conecte seu repositório GitHub/GitLab

2. **Configure o build:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (deixe vazio)

3. **Variáveis de ambiente:**
   - NODE_VERSION: `18`
   - NPM_VERSION: `latest`

### Método 2: Deploy Manual via Wrangler CLI

```bash
# Instalar Wrangler CLI
npm install -g wrangler

# Login na Cloudflare
wrangler login

# Build do projeto
npm run build

# Deploy
wrangler pages deploy dist --project-name=glions-website
```

### Método 3: Deploy via Drag & Drop

1. Execute o build: `npm run build`
2. Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
3. Arraste a pasta `dist` para a área de upload

## 🛠️ Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── Header.tsx      # Cabeçalho
│   ├── Hero.tsx        # Seção principal
│   ├── Services.tsx    # Serviços
│   ├── ConsortiumTypes.tsx # Tipos de consórcio
│   ├── HowItWorks.tsx  # Como funciona
│   ├── Testimonials.tsx # Depoimentos
│   ├── Partners.tsx    # Parceiros
│   ├── Contact.tsx     # Contato
│   └── Footer.tsx      # Rodapé
├── App.tsx             # Componente principal
├── main.tsx           # Ponto de entrada
└── index.css          # Estilos globais
```

## 🎨 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS
- **Vite** - Build tool
- **Lucide React** - Ícones
- **Cloudflare Pages** - Hospedagem

## 📱 Recursos

- ✅ Design responsivo
- ✅ Animações suaves
- ✅ Otimizado para SEO
- ✅ Performance otimizada
- ✅ Integração WhatsApp
- ✅ Formulário de contato
- ✅ Depoimentos reais
- ✅ Seção de parceiros

## 🔧 Configurações de Build

O projeto está configurado para:
- Minificação automática
- Code splitting
- Otimização de assets
- Suporte a SPA routing
- Redirects automáticos

## 📞 Contato

- **WhatsApp:** (11) 96531-6163
- **Email:** contato@glions.com.br
- **Endereço:** R. Topázio, 76 - Vila Mariana, São Paulo - SP

---

Desenvolvido com ❤️ para G.LIONS