<template>
    <div class="bottom">
        <div class="holder">
            <div>Card Holder</div>
            <transition name="slide-fade-up">
                <div v-if="cardHolder">
                    <transition-group name="slide-fade-right">
                        <span class="word"
                              v-for="(n, $index) in cardHolder.replace(/\s\s+/g, ' ')"
                              v-bind:key="$index + 1">{{ n || ' ' }}</span>
                    </transition-group>
                </div>
                <div v-else key="2">FULL NAME</div>
            </transition>
        </div>
        <div class="date">
            <p>Expires</p>
            <p>
                <transition name="slide-fade-up">
                    <span :key="selectedMonth">{{ selectedMonth}}</span>
                </transition>/<transition name="slide-fade-up">
                <span :key="selectedYear">{{ selectedYear.slice(2) }}</span>
            </transition>
            </p>
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex";

export default {
    computed: {
        ...mapState({
            selectedMonth: 'selectedMonth',
            selectedYear: 'selectedYear',
            cardHolder: 'cardHolder',
        })
    },
}
</script>

<style scoped lang="scss">
.bottom {
    color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.holder {
    padding: 10px 15px 0 15px;
    max-width: calc(100% - 85px);

    .word {
        min-width: 9.1px;
        min-height: 18px;
    }

    span {
        display: inline-block;
    }

    & div:first-child {

        opacity: 0.7;
        font-size: 13px;
        margin-bottom: 6px;
    }

    & div:last-child {
        max-width: 100%;
        line-height: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 6px;
    }
}

.date {
    padding: 10px 10px 0 10px;

    & p:first-child {
        opacity: 0.7;
        font-size: 13px;
        padding-bottom: 6px;
        width: 100%;
    }

    & p:last-child {
        line-height: 1;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        text-transform: uppercase;
        font-size: 18px;
        margin-bottom: 6px;

        span {
            display: inline-block;
        }
    }
}

@media (max-width: 381px) {
    .holder {
        padding: 0 15px 0 15px;

        & div:first-child {
            margin-bottom: 3px;
        }

        & div:last-child {
            margin-bottom: 3px;
        }
    }

    .date {
        padding: 0 10px 0 10px;

        & p:first-child {
            padding-bottom: 3px;
        }

        & p:last-child {
            margin-bottom: 3px;
        }
    }
}
</style>