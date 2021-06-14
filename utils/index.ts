import { ComponentType, ReactNode } from 'react'

export type EmptyObject = Record<PropertyKey, never>
export type AnyObject = Record<PropertyKey, unknown>

export type WithChildren = { children: ReactNode }
export type ComponentWithLayout<T extends AnyObject> = ComponentType<T> & {
  Layout?: ComponentType<WithChildren>
  authenticated?: boolean
}