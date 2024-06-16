import { Title } from "@storage/header";
import { platformStore } from "@storage/platform";
import { t } from "@storage/theme";
import ErrorSection from "./error";

export default function () {
    return (
        <>
            <Title title={`${t("errors.500")} - ${platformStore.config.name || t("platform.name")}`} />
            <ErrorSection status={500} />
        </>
    );
}
