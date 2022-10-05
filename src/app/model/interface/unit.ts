export default interface Unit {
  getBaseUnitValue(value: number): number;
  convertFromBaseUnit(value: number): number;
}
