/**
 * Класс CreateTransactionForm управляет формой создания новой транзакции.
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и метод renderAccountsList.
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list.
   * Обновляет в форме всплывающего окна выпадающий список.
   * */
  renderAccountsList() {
    const accounts = this.element.querySelectorAll(".accounts-select");
    let html = `<option value="${this.element.id}">${this.element.name}</option>`;
    const user = User.current();
    if (user) {
      Account.list(data, (err, response) => {
        if (response && response.success) {
          for (let i = 0; i < accounts.length; i++) {
          accounts[i].innerHTML =+ html;
          }
        }
      });
    }
  }

  /**
   * Создаёт новую транзакцию (доход или расход) с помощью Transaction.create. 
   * По успешному результату вызывает App.update(), сбрасывает форму и закрывает окно, в котором находится форма.
   * */
  onSubmit(data) {
    Transaction.create(data, (err, response) => {
      if (response && response.success) {
        App.update();
        this.element.reset();
        App.getModal('newIncome').close();
        App.getModal('newExpense').close();
      }
    });
  }
}

