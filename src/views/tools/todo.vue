<template>
  <h1>TODO</h1>
  <router-link class="text-dark nav-link" to="/tools"><<-Previous</router-link>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="mb-3">
          <label for=" todo" class="form-label">Input Todo</label>
          <textarea v-model="formatData.desc" class="form-control" id=" todo" rows="3"></textarea>
          <button type="button" class="btn btn-primary" id="todo" @click="saveData">Simpan</button>
        </div>
      </div>
      <div class="col-12">
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">No.</th>
              <th scope="col">Task</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="saved.length > 0">
              <tr v-for="(row, index) in saved" :key="'row-' + index" @click="click(row)">
                <td>
                  <input class="form-check-input" type="checkbox" v-model="row.isSelected" id="flexCheckDefault" />
                </td>
                <td>{{ row.number }}.</td>
                <td>{{ row.desc }}.</td>
                <td v-if="row.isSelected">
                  <button type="button" class="btn btn-primary">Edit</button>
                  <button type="button" class="btn btn-danger">Delete</button>
                </td>
                <td v-else></td>
              </tr>
            </template>
            <template v-else>
              <td colspan="3" align="center">
                <p style="display: block; text-align: center; padding: 5px; font-size: 14px">No data for table</p>
              </td>
            </template>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'todo',
  data() {
    return {
      saved: [],
      formatData: {
        isSelected: false,
        number: 0,
        desc: '',
        done: false,
      },
    }
  },
  methods: {
    saveData() {
      this.formatData.number = this.saved.length + 1
      this.saved.push(this.formatData)
      this.resetForm
    },
    resetForm() {
      this.formatData.number = 0
      this.formatData.isSelected = false
      this.formatData.desc = ''
      this.formatData.done = false
    },
    click(row) {
      row.isSelected = !row.isSelected
    },
  },
}
</script>
