import { Avatar } from "@ark-ui/solid";
import { type JSX, Show, createSignal, splitProps } from "solid-js";
import Spin from "../assets/animates/spin";

export type AvatarProps = {
    fallback?: string;
    class?: string;
    src?: string;
    alt?: string;
    children?: JSX.Element;
    loading?: boolean;
};

export default function (props: AvatarProps) {
    const [avatarFunctionProps, _1] = splitProps(props, ["fallback", "loading"]);
    const [children, root] = splitProps(_1, ["children"]);
    const [imageLoading, setImageLoading] = createSignal(true);
    return (
        <Avatar.Root class={`avatar ${root.class}`}>
            <Avatar.Fallback class="avatar-fallback">
                {avatarFunctionProps.fallback?.slice(0, 2).toUpperCase()}
            </Avatar.Fallback>
            <Avatar.Image
                src={root.src}
                alt={root.alt}
                class="avatar-img"
                onLoad={() => {
                    setImageLoading(false);
                }}
            />
            {children.children}
            <Show when={avatarFunctionProps.loading || (root.src && imageLoading())}>
                <div class="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                    <Spin width={20} height={20} />
                </div>
            </Show>
        </Avatar.Root>
    );
}
