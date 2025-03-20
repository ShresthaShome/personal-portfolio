import Button from "./Button";

export default function Links({ contacts }) {
  return (
    <div className="flex flex-row mt-0 mx-1 gap-1">
      {contacts.github && (
        <Button html={contacts.github}>
          <span className="text-[16px]">Github</span>
        </Button>
      )}
      {contacts.linkedin && (
        <Button html={contacts.linkedin}>
          <span className="text-[16px]">LinkedIn</span>
        </Button>
      )}
      {contacts.email && (
        <Button html={`mailto:${contacts.email}`}>
          <span className="text-[16px]">Email</span>
        </Button>
      )}
    </div>
  );
}
