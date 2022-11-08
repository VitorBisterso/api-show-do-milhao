export function getMinLengthErr(field: string, length: number) {
  return `O campo ${field} deve ter um mínimo de ${length} caracteres`;
}

export function getCreationErr(entity: string, error: Error) {
  return `Falha ao criar ${entity}: ${error}`;
}

export function getRequiredFieldErr(field: string) {
  return `O campo ${field} é obrigatório`;
}

export function getNotFoundErr(entity: string) {
  return `Não foi possível encontrar nenhum ${entity} com os dados fornecidos`;
}
