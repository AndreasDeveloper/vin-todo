<template>
    <div class="d-block">
            <div class="d-block__content">
                <div class="d-block__content__head">
                    <DataIcon fill="#2ecc71" width="50px" height="50px" />
                    <h3>Private Data</h3>
                    <h5>Your sensitive data, recently added</h5>
                </div>
                <div class="d-block__content__body">
                    <div class="d-block__content__body__el">
                        <span class="d-block__content__body__el__item">Gmail Email Address</span>
                    </div>
                    <div class="d-block__content__body__el">
                        <span class="d-block__content__body__el__item">Outlook Email Address</span>
                    </div>
                    <div class="d-block__content__body__el">
                        <span class="d-block__content__body__el__item">Gmail Password</span>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import DataIcon from '@/assets/icons/secure.svg';

export default {
    name: 'DashBlock',
    components: {
        DataIcon
    }
}
</script>

<style lang="scss" scoped>
@import '@/styles/components/_dash-block.scss';
</style>