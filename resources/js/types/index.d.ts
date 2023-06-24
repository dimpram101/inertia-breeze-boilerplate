export interface User {
    id: number;
    name: string;
    email: string;
    phone_number: string;
    roles?: [
        {
            id: number,
            name: string
        }
    ]
    email_verified_at: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
    };
};
