type NavLinkClassProps = {
  isActive: boolean
}

export const navLinkClass = ({ isActive }: NavLinkClassProps) => isActive ? 'bg-blue-600/50 text-blue-50' : 'text-gray-700 hover:bg-blue-600/10'
