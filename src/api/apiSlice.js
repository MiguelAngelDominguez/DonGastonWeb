// Initialize the JS client
import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = 'https://fvacgyuaywxrgqywpqll.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2YWNneXVheXd4cmdxeXdwcWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ1MDA4MjAsImV4cCI6MjAzMDA3NjgyMH0.c63eLM05aum3VSRDADalCXa2QrLRrzJu119ROE1K0Ow'

async function apiSlice() {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, { db: { schema: 'dongaston' } })
    const { data: todos, error } = await supabase.from('products').select('*')
    todos.map(todo => {
        console.log(todo)
    })
    return todos
}

export default apiSlice;


