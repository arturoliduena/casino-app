export type Country = {
  name: string,
  alpha3Code: string,
  capital: string,
  region: string,
  population: number,
  area: number,
  nativeName: string,
  numericCode: string,
  languages: { name: string }[],
  flag: string,
}

export type Option = {
  value: string,
  label: string,
  code: string,
}