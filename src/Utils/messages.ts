export function getMinLengthErr(field: string, length: number) {
  return `Field "${field}" must be at least ${length} characters long`;
}

export function getCreationErr(entity: string, error: Error) {
  return `Could not create ${entity}: ${error}`;
}
