import { db, Family, User } from 'astro:db';

import { generateId } from 'lucia';

// https://astro.build/db/seed
export default async function seed() {
    await db.insert(User).values([
        {
            id : generateId(15),
            email : "JorgeAndrew",
            hashed_password : "",
            user_type : "groom",
        },
        {
            id : generateId(15),
            email : "KarimeFlores",
            hashed_password : "",
            user_type : "bride",
        }
    ]);

    await db.insert(Family).values([
        {
            id : generateId(15),
            prefix : "Familia",
            name : "Andrew",
            numTickets : 2,
            invitationAccepted : false,
            createdBy : "groom",
        },
        {
            id : generateId(15),
            prefix : "Familia",
            name : "Flores",
            numTickets : 3,
            invitationAccepted : false,
            createdBy : "bride",
        }
    ]);
}
