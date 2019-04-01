<template>
    <transition name="move">
        <div class="food" v-show="visible">
            <cube-scroll ref="scroll">
                <div class="food-content">
                    <div class="image-header">
                        <img :src="food.image">
                        <div class="back" @click="hide">
                            <i class="icon-arrow_left"></i>
                        </div>
                    </div>
                </div>
            </cube-scroll>
        </div>
    </transition>
</template>