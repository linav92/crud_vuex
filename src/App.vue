<template>
  <div id="app">
    <Form></Form>
    <Table></Table>
    
  </div>
</template>

<script>
import Table from './components/Table.vue'
import Form from './components/Form.vue'

export default {
  components: {
    Table, Form
  }
}
</script>

<style>
body{
  font-family: 'Montserrat', sans-serif;
}

.container {
  padding: 20px;
}
</style>
