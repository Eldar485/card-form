import {createStore} from "vuex";

interface INotification {
    title: string,
    description: string,
    type: string,
    id: string
}

export default createStore({
    state: () => ({
        cardNumber: '',
        cardHolder: '',
        cvv: '',
        selectedMonth: '01',
        selectedYear: '2023',
        cardMask: '#### #### #### ####',
        cvvMask: '####',
        isCardFlipped: false,
        months: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '00', '10', '11', '12'],
        years: ['2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030', '2031', '2032', '2033', '2034'],
        notifications: [] as INotification[]
    }),
    getters: {
        hiddenCvv: state => '*'.repeat(state.cvv.length),
        getNotifications: state => state.notifications,
    },
    mutations: {
        setNotifications(state, notification: INotification) {
            notification.id = Date.now().toLocaleString();
            state.notifications.unshift(notification);
            setTimeout(() => {
                state.notifications = state.notifications.filter(n => n.id !== notification.id)
            }, 3000);
        },
        setCardNumber(state, cardNumber) {
            state.cardNumber = cardNumber;
        },
        setCardHolder(state, cardHolder) {
            state.cardHolder = cardHolder;
            console.log(state.cardHolder.length)
        },
        setCvv(state, cvv) {
            state.cvv = cvv;
        },
        selectMonth(state, selectedMonth) {
            state.selectedMonth = selectedMonth;
        },
        selectYear(state, selectedYear) {
            state.selectedYear = selectedYear;
        },
        setCardFlipped(state, flip) {
            state.isCardFlipped = flip;
        }
    },
    actions: {}
})