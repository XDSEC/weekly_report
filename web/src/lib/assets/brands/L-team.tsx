import { themeStore } from "@storage/theme";

export default function (props: { width?: number; height?: number }) {
    const { width, height } = { width: 24, height: 24, ...props };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 135.467 135.467">
            <g stroke-linecap="round">
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".698"
                    d="m42.208 82.67 11.528-11.53 11.526 11.527-11.528 11.528z"
                />
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".984"
                    d="M51.045 61.451h80.19v1.153h-80.19z"
                />
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".969"
                    d="M76.802 36.736h1.153v96.624h-1.153z"
                />
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".698"
                    d="M49.508 55.241h8.452V86.51h-8.452z"
                />
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".698"
                    d="M51.045 41.186h5.379v21.715h-5.38z"
                />
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".698"
                    d="M49.508 20.035h8.452v27.666h-8.452z"
                />
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".698"
                    d="M74.484 77.673h21.901v9.992h-21.9z"
                />
                <path
                    fill={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                    fill-opacity=".698"
                    d="M50.2 79.556h33.518v6.224H50.2z"
                />
            </g>
            <path
                fill="none"
                stroke={themeStore.colorScheme === "dark" ? "#fff" : "#000"}
                stroke-linecap="square"
                stroke-opacity=".6"
                stroke-width="7.8278431"
                d="M65.716 108.543a50.37 50.37 0 0 1-35.509-8.498"
            />

            <g stroke={themeStore.colorScheme === "dark" ? "#fff" : "#000"} fill="none" stroke-linecap="square">
                <path
                    stroke-width="3.70043492"
                    d="M49.299 107.8A49.87 49.87 0 0 1 11.55 73.05a49.87 49.87 0 0 1 12.888-49.663 49.87 49.87 0 0 1 49.883-12.008"
                />
                <path
                    stroke-width="1.45229"
                    d="M12.167 55.575A47.33 47.33 0 0 1 24.299 27.17M23.75 29.588a46 46 0 0 1 7.366-7.308"
                />
                <path
                    stroke-width="2.90458"
                    d="M40.4 16.329a46 46 0 0 1 7.319-2.681M36.583 100.196a46 46 0 0 1-3.007-1.801M40.632 102.124l-.024-.011M46.484 104.204a46 46 0 0 1-1.548-.465"
                />
                <path
                    stroke-width="1.45229"
                    d="M16.663 75.893a45.9 45.9 0 0 1-2.704-23.423M12.843 67.592l-.037-.204M12.44 65.117l-.026-.195M12.152 62.422l-.009-.1"
                />
                <path
                    stroke-width="3.8195227000000003"
                    d="M6.758 66.787a53.2 53.2 0 0 1-.47-12.005M7.145 48.436l.014-.067M16.898 26.64a53 53 0 0 1 3.535-4.206M24.253 18.73a53 53 0 0 1 .621-.537M29.106 14.946a53 53 0 0 1 1.206-.81M35.525 11.147a53 53 0 0 1 7.63-3.108M8.789 42.148l.037-.114"
                />
                <path stroke-width="2.90458" d="M30.12 103.292a46 46 0 0 1-2.684-1.888" />
            </g>
        </svg>
    );
}
