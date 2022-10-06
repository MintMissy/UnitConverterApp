export class StringUtils {
  static capitalizeFully(name: string): string {
    return name
      .split(' ')
      .map((name) => name.toLowerCase())
      .map((name) => name.charAt(0).toUpperCase() + name.substring(1))
      .join(' ');
  }
}
