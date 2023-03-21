export const coWorkersData = [
  {
    id: 1,
    email: "akshay@cashwise.in",
    role: "Owner",
    status: "accepted",
    isOwner: true,
  },
  {
    id: 2,
    email: "shivanju@cashwise.in",
    role: "Admin",
    status: "accepted",
    isOwner: false,
  },
  {
    id: 3,
    email: "siddhant@cashwise.in",
    role: "Admin",
    status: "pending",
    isOwner: false,
  },
];

export const listingTableColumns = [
  {
    id: 1,
    name: "Co-workers Emails",
    width: 250,
  },
  {
    id: 2,
    name: "Role",
    width: 180,
  },
  {
    id: 3,
    name: "",
    width: 50,
  },
  {
    id: 4,
    name: "",
  },
];

export const deleteTooltip = "Delete this role";
export const resendInviteTooltip = "Resend invite";
export const pendingStatus = "pending";
