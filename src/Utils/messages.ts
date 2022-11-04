export function getMinLengthErr(field: string, length: number) {
  return `Field ${field} must be at least ${length} characters long`;
}

export function getCreationErr(entity: string, error: Error) {
  return `Could not create ${entity}: ${error}`;
}

export function getRequiredFieldErr(field: string) {
  return `Field ${field} is required`;
}

export function getNotFoundErr(entity: string) {
  return `Could not find any ${entity} with the given params`;
}
