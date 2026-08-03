export interface NavItem {
    label: string;
    href: string;
}

export interface NavSection {
    title: string;
    items: NavItem[];
}

export const navigationData: NavSection[] = [
    {
        title: "UNSAAC",
        items: [
            { label: "Nosotros", href: "#" },
            { label: "Directorio", href: "#" },
        ],
    },
    {
        title: "PROGRAMAS",
        items: [
            { label: "Maestrías", href: "#" },
            { label: "Doctorados", href: "#" },
            { label: "Segundas Especialidades", href: "#" },
            { label: "Residentado Médico", href: "#" },
        ],
    },
    {
        title: "INVESTIGACIÓN",
        items: [
            { label: "Publicaciones", href: "#" },
            { label: "Líneas de Investigación", href: "#" },
        ],
    },
    {
        title: "ADMISIÓN Y SERVICIOS",
        items: [
            { label: "Comunicados", href: "#" },
            { label: "Cronograma", href: "#" },
            { label: "Requisitos", href: "#" },
        ],
    },
];