export default function classname(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
