export default function (props: { width?: number; height?: number }) {
    const { width, height } = { width: 24, height: 24, ...props };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 512 512">
            <defs>
                <symbol id="meteoconsPollenGrass0" viewBox="0 0 232 72">
                    <circle cx="116" cy="12" r="12" fill="#f8af18">
                        <animateTransform
                            attributeName="transform"
                            begin="-0.33s"
                            calcMode="spline"
                            dur="3s"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 -30; 0 30; 0 -30"
                        />
                    </circle>
                    <circle cx="156" cy="52" r="16" fill="#f8af18">
                        <animateTransform
                            attributeName="transform"
                            begin="-1.17s"
                            calcMode="spline"
                            dur="3s"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 -30; 0 30; 0 -30"
                        />
                    </circle>
                    <circle cx="76" cy="52" r="16" fill="#f8af18">
                        <animateTransform
                            attributeName="transform"
                            begin="-1s"
                            calcMode="spline"
                            dur="3s"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 -30; 0 30; 0 -30"
                        />
                    </circle>
                    <circle cx="12" cy="60" r="12" fill="#f8af18">
                        <animateTransform
                            attributeName="transform"
                            begin="-.67s"
                            calcMode="spline"
                            dur="3s"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 -30; 0 30; 0 -30"
                        />
                    </circle>
                    <circle cx="220" cy="60" r="12" fill="#f8af18">
                        <animateTransform
                            attributeName="transform"
                            begin="-1.5s"
                            calcMode="spline"
                            dur="3s"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 -30; 0 30; 0 -30"
                        />
                    </circle>
                    <circle cx="180" cy="20" r="8" fill="#f8af18">
                        <animateTransform
                            attributeName="transform"
                            begin="-1.33s"
                            calcMode="spline"
                            dur="3s"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 -30; 0 30; 0 -30"
                        />
                    </circle>
                    <circle cx="52" cy="20" r="8" fill="#f8af18">
                        <animateTransform
                            attributeName="transform"
                            begin="-.83s"
                            calcMode="spline"
                            dur="3s"
                            keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                            repeatCount="indefinite"
                            type="translate"
                            values="0 -30; 0 30; 0 -30"
                        />
                    </circle>
                </symbol>
            </defs>
            <path
                fill="#40c057"
                d="M264.5 384c.1-14.9.8-109.5 2.4-131.8c1.9-24.2 11-58.6 16.5-84.7S275 128 275 128s13.4 13.4-6.1 72c-18.7 56-14 174-13.5 184Zm24.9-104c-16.8 38.6-19 86.4-19.2 104H287c-1.4-19.6-3.5-76.4 13.6-107.6c21-38.3 39.3-32 39.3-32s-29.7-12.7-50.6 35.6Z"
            />
            <path
                fill="#40c057"
                d="M261.5 384h12.8c1.5-21.1 7.2-87.9 19.7-123c15-42 4.3-85.9 4.3-85.9s5.6 43.1-14.3 89c-17 39-21.5 102-22.5 119.9Zm-19.2 0h16.5c-2-11.6-15.9-91.7-30.5-121c-15.8-31.4-27.5-46.1-56.3-57.3c0 0 35.2 15.1 51.7 83a843.4 843.4 0 0 1 18.6 95.3Z"
            />
            <path
                fill="#40c057"
                d="M242.6 384c-4-19-19.7-81.8-58.9-99.4c0 0 21.8 23.4 32.4 49.2a219.3 219.3 0 0 1 12.5 50.2Z"
            />
            <use width="232" height="72" href="#meteoconsPollenGrass0" transform="translate(140 132)" />
        </svg>
    );
}
