import { CardAtivo } from './component/CardAtivo.jsx';
import { Heading1 } from './component/Heading.jsx';
import './styles/theme.css'




export function App() {
  return (
    
    <div className="container">
      
      
      <div className="grid">
        {/* Card de Bitcoin */}
        <CardAtivo titulo="Bitcoin (BTC) 🚀">
          <p style={{ textAlign: 'center' }}>Preço: R$ 350.000,00</p>
          <span style={{ color: 'var(--alta)' }}>+5.2% hoje</span>
          <Heading1>Lucro</Heading1>
        </CardAtivo>

        {/* Card de Fundo Imobiliário */}
        <CardAtivo titulo="Fundo Imobiliário (HGLG11) 🏢">
          <p style={{ textAlign: 'center' }}>Dividendo: R$ 1,10</p>
          <span style={{ color: 'var(--alta)' }}>Rendimento estável</span>
          <Heading1>Lucro</Heading1>
        </CardAtivo>

        {/* Card de Ação */}
        <CardAtivo titulo="Empresa X (VALE3) 📉">
          <p style={{ textAlign: 'center' }}>Preço: R$ 65,20</p>
          <span style={{ color: 'var(--baixa)' }}>-1.8% hoje</span>
          <Heading1>Prejuízo</Heading1>
        </CardAtivo>
      </div>
    </div>
  );
}

