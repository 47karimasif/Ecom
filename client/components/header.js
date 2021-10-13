import Link from 'next/link';

export default ({ currentUser }) => {
  const links = [
    !currentUser && { label: 'Sign Up', href: '/auth/signup' },
    !currentUser && { label: 'Sign In', href: '/auth/signin' },
    currentUser && { label: 'Sign Out', href: '/auth/signout' }
  ]
    .filter(linkConfig => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item">
          <Link href={href}>
            <a className="nav-link">{label}</a>
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light" style={{padding:"15px 30px"}}>
      <Link href="/">
        <a className="navbar-brand">Ecom</a>
      </Link>

      <div className="d-flex justify-content-end align-items-center">
        <ul className="nav d-flex align-items-center">{links}</ul>
        {currentUser && <p style={{margin:"0px"}}>{currentUser.email.split("@")[0]}</p>}
      </div>
    </nav>
  );
};
