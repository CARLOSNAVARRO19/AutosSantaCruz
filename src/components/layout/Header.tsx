import { useState } from 'react';

function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header className="bg-white">
			<div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8 flex items-center justify-between">
				<a href="#" className="text-lg font-bold text-gray-900">
					Carritos el playito Navarro
				</a>

				<nav className="hidden md:flex items-center space-x-6">
					<a href="#" className="text-gray-700 hover:text-gray-900">
						Inicio
					</a>
					<a href="#autos" className="text-gray-700 hover:text-gray-900">
						Autos
					</a>
					<a href="#promociones" className="text-gray-700 hover:text-gray-900">
						Promociones
					</a>
					<a href="#sucursales" className="text-gray-700 hover:text-gray-900">
						Sucursales
					</a>
					<a href="#contacto" className="text-gray-700 hover:text-gray-900">
						Contacto
					</a>
				</nav>

				<div className="md:hidden">
					<button
						onClick={() => setOpen((s) => !s)}
						aria-expanded={open}
						aria-controls="mobile-menu"
						className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
					>
						{/* Menu / Close icons */}
						{!open ? (
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4 6h16M4 12h16M4 18h16"
								/>
							</svg>
						) : (
							<svg
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								aria-hidden="true"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
						)}
					</button>
				</div>
			</div>

			{/* Mobile menu */}
			{open && (
				<div id="mobile-menu" className="md:hidden border-t border-gray-100">
					<div className="px-4 py-4 space-y-2">
						<a href="#" className="block text-gray-700">
							Inicio
						</a>
						<a href="#servicios" className="block text-gray-700">
							Servicios
						</a>
						<a href="#proyectos" className="block text-gray-700">
							Proyectos
						</a>
						<a href="#blog" className="block text-gray-700">
							Blog
						</a>
						<a href="#contacto" className="block text-gray-700">
							Contacto
						</a>
					</div>
				</div>
			)}
		</header>
	);
}

export default Header;
