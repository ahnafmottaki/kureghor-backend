export enum Status {
    ACTIVE = "active",
    INACTIVE = "inactive",
    SUSPENDED = "suspended",
}

export interface User {
    id: number;
    full_name: string;
    full_name_bangla: string;
    fathers_name: string;
    mothers_name: string;
    present_addres: string;
    permanent_address: string;
    contact_no: string;
    guardians_number: string;
    institution: string;
    ssc_batch: number;
    email: string;
    password: string;
    profile_pic: string;
    nid_birth_document: string;
    blood_group: string;
    status: Status;
    obligation_start_date: Date;
    status_in_foundation: string;
    created_at: Date;
    updated_at: Date;
    // add properties here
}

export interface Admin {
    id: number;
    full_name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}
