export const Logo = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1461 1488">
        <defs>
            <path id="f" fill="none" d="M0 400h317M500 0v900M317 500H0m-183 400V0" clip-path="url(#a)"/>
        </defs>
        <defs>
            <clipPath id="a">
                <use xlinkHref="#b"/>
            </clipPath>
            <clipPath id="h">
                <use xlinkHref="#c"/>
            </clipPath>
            <clipPath id="j">
                <use xlinkHref="#d"/>
            </clipPath>
            <filter id="e" width="614" height="1197" x="847" y="0" filterUnits="userSpaceOnUse">
                <feOffset/>
                <feGaussianBlur result="blur" stdDeviation="49.5"/>
                <feFlood flood-opacity=".7"/>
                <feComposite in2="blur" operator="in"/>
                <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="g" width="615" height="1197" x="423" y="291" filterUnits="userSpaceOnUse">
                <feOffset/>
                <feGaussianBlur result="blur-2" stdDeviation="49.5"/>
                <feFlood flood-opacity=".7"/>
                <feComposite in2="blur-2" operator="in"/>
                <feComposite in="SourceGraphic"/>
            </filter>
            <filter id="i" width="614" height="1197" x="0" y="0" filterUnits="userSpaceOnUse">
                <feOffset/>
                <feGaussianBlur result="blur-3" stdDeviation="49.5"/>
                <feFlood flood-opacity=".7"/>
                <feComposite in2="blur-3" operator="in"/>
                <feComposite in="SourceGraphic"/>
            </filter>
        </defs>
        <g filter="url(#e)">
            <g fill="#fff" stroke="#fff" stroke-width="1000" data-name="Droite" transform="translate(996 149)">
                <rect id="b" width="317" height="900" stroke="none" rx="158.5"/>
                <use xlinkHref="#f" clip-path="url(#a)"/>
            </g>
        </g>
        <g filter="url(#g)">
            <g fill="#fff" stroke="#fff" stroke-width="1000" data-name="Milieu" transform="translate(572 440)">
                <rect id="c" width="318" height="900" stroke="none" rx="159"/>
                <path fill="none" d="M0 400h318M500 0v900M318 500H0m-182 400V0" clip-path="url(#h)"/>
            </g>
        </g>
        <g filter="url(#i)">
            <g fill="#fff" stroke="#fff" stroke-width="1000" data-name="Gauche" transform="translate(149 149)">
                <rect id="d" width="317" height="900" stroke="none" rx="158.5"/>
                <use xlinkHref="#f" clip-path="url(#j)"/>
            </g>
        </g>
    </svg>
);