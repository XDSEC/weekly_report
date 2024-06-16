export default function (props: { width?: number; height?: number }) {
    const { width, height } = { width: 24, height: 24, ...props };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 256 236">
            <path fill="#E24329" d="m128.075 236.075l47.104-144.97H80.97l47.104 144.97" />
            <path fill="#FC6D26" d="M128.075 236.074L80.97 91.104H14.956l113.119 144.97" />
            <path
                fill="#FCA326"
                d="M14.956 91.104L.642 135.16a9.752 9.752 0 0 0 3.542 10.903l123.891 90.012l-113.12-144.97"
            />
            <path fill="#E24329" d="M14.956 91.105H80.97L52.601 3.79c-1.46-4.493-7.816-4.492-9.275 0z" />
            <path fill="#FC6D26" d="m128.075 236.074l47.104-144.97h66.015l-113.12 144.97" />
            <path
                fill="#FCA326"
                d="m241.194 91.104l14.314 44.056a9.752 9.752 0 0 1-3.543 10.903l-123.89 90.012l113.119-144.97"
            />
            <path fill="#E24329" d="M241.194 91.105h-66.015l28.37-87.315c1.46-4.493 7.816-4.492 9.275 0z" />
        </svg>
    );
}
