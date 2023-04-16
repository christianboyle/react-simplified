import React from 'react'
export function TodoListItem({ children, isComplete }) {
  return (
    <div>
      <label>
        <input type='checkbox' checked={isComplete} />
        {children}
      </label>
    </div>
  )
}
