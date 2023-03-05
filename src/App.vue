<template>
    <router-view v-slot="slotProps">
        <transition name="slide-fade" mode="out-in">
            <component :is="slotProps.Component"></component>
        </transition>
    </router-view>
</template>
<script>

</script>
<style>
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.slide-fade-enter-to,
.slide-fade-leave-from
{
    opacity:1;
}
.slide-fade-enter-active{
    transition: opacity 0.3s ease-out;
}
.slide-fade-Leave-active{
    transition: opacity 0.3s ease-in;
}
.slide-fade-enter-from,
.slide-fade-leave-to{
    opacity:0;
}
</style>