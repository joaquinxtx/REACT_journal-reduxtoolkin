import React from 'react'
import { AppRouter } from './router/AppRouter'
import { AppTheme } from './theme/AppTheme'

export const JournalApp = () => {
  return (
    <div>
      <AppTheme>
        <AppRouter/>

      </AppTheme>
        
    </div>
  )
}
