<template>

      <tr>
        <td className="text-center p-3 text-sm">{{name}}</td>
        <td className="text-center p-3 text-sm">{{email}}</td>
        <td className="text-center p-3 text-sm">{{ lat }}</td>
        <td className="text-center p-3 text-sm">{{long}}</td>
        <td className="text-center p-3 text-md underline text-blue-600"> <RouterLink :to="`/user/${id}`">جزییات بیشتر</RouterLink></td>
      </tr>
  
</template>

<script setup lang="ts">
    defineProps({
        name:{type:String,default:'hossein'},
        email:{type:String},
        lat:{type:String},
        long:{type:String},
        id:{type:Number}
    })
</script>

<style lang="scss" scoped></style>
