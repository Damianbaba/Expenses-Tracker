import './ExpenseForm.css'
const ExpenseForm = () => {
    return <div>
        <form>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type='text' />
                </div>
            </div>
        </form>
    </div>
}

export default ExpenseForm;