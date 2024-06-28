"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud";
import { useScreenSize } from "../Skills";


export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2.5,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.01,
        // dragControl: false,
    },
};

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    let bgHex = theme === "light" ? "#f3f2ef" : "#080510";
    let fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff";
    const minContrastRatio = theme === "dark" ? 2 : 1.2;

    if (
        icon.slug === "vercel" ||
        icon.slug === "github" ||
        icon.slug === "nextdotjs" ||
        icon.slug === "express"
    ) icon.hex = "#ffffff";

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault(),
        },
    });
};

export type DynamicCloudProps = {
    iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null);
    const { theme } = useTheme();
    const { width } = useScreenSize();
    const isDrag = width < 500 ? false : true;

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }, [iconSlugs]);

    const renderedIcons = useMemo(() => {
        if (!data) return null;

        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon, theme || "light"),
        );
    }, [data, theme]);

    return (
        // @ts-ignore
        <Cloud {...cloudProps} options={{ ...cloudProps.options, dragControl: isDrag }}>
            <>{renderedIcons}</>
        </Cloud>
    );
}
