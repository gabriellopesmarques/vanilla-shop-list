export default function Header() {
    return `
        <header class="main-header">
            <div class="container">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><circle cx="256" cy="256" r="64"/><circle cx="256" cy="448" r="64"/><circle cx="256" cy="64" r="64"/></svg>
                </button>
                <nav class="navbar">
                    <ul>
                        <li>Minhas Listas</li>
                        <li>Meus Produtos</li>
                        <li>Politícas de Privacidade</li>
                    </ul>
                </nav>
            </div>
        </header>
    `;
}
