import { StringUtils } from '../util/string-utils';

export abstract class EnumIdentity {
  constructor(public readonly id: number, public readonly name: string) {}

  toString(): string {
    return this.name;
  }

  toFormattedString(): string {
    return StringUtils.capitalizeFully(this.name.replace('_', ' '));
  }
}
