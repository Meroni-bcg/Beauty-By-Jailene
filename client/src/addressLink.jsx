export default function AddressLink({children,className=null}) {
    if (!className) {
      className = 'my-3 block';
    }
    className += ' flex gap-1 font-semibold underline';
    return (
      <a className={className} target="_blank" href={'https://www.google.com/maps/place/Beauty+by+Jailene/@36.0555581,-115.0475522,17z/data=!3m1!4b1!4m6!3m5!1s0x80c8d141b142f4a3:0x197f80589c5c70ba!8m2!3d36.0555581!4d-115.0449773!16s%2Fg%2F11k99ygs9m'+children}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
        {children}
      </a>
    );
  }