import { defineDb, defineTable, column } from 'astro:db';

const User = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    email: column.text({ unique: true }),
    user_type: column.text(),
    hashed_password: column.text(),
  },
});

const Session = defineTable({
  columns: {
    id: column.text({ primaryKey: true }),
    expiresAt: column.date(),
    userId: column.text({
      references: () => User.columns.id,
    }),
  },
});

const Family = defineTable({
  columns: {
    id : column.text({ primaryKey: true, unique: true }),
    prefix: column.text({ default: "Familia" }),
    name: column.text(),
    numTickets: column.number(),
    invitationAccepted: column.boolean(),
    acceptedDate: column.date({ optional: true }),
    createdBy: column.text({default: "system"}),
    createdAt: column.date({ default: new Date()}),
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    User,
    Session, 
    Family,
  },
});
