<template>
    <div class="navbar-wrap">
        <div class="navbar-wrap__content">
            <span>Vin</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style lang="scss" scoped>
.navbar-wrap {
    background-color: $color-primary;
    font-family: 'Pacifico', cursive;
    min-height: 8vh;
    width: 100%;
    &__content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height: inherit;
        padding: 0 10px;
        span {
            color: $color-white;
            cursor: pointer;
            font-size: 20px;
            font-weight: bold;
            text-transform: uppercase;
            user-select: none;
        }
    }
}
</style>