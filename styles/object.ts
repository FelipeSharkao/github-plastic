export function mapToObject<
  IKey extends PropertyKey,
  IVal,
  OKey extends PropertyKey,
  OVal
>(
  o: Record<IKey, IVal>,
  factory: (item: readonly [IKey, IVal]) => readonly [OKey, OVal]
): { [T in OKey]: OVal } {
  const result: Partial<{ [T in OKey]: OVal }> = {}

  for (const key in o) {
    if (Object.prototype.hasOwnProperty.call(o, key)) {
      const [outKey, outValue] = factory([key, o[key]] as const)
      result[outKey] = outValue
    }
  }
  return result as { [T in OKey]: OVal }
}
