<template>
  <h1>TODO</h1>
  <hr />
  <router-link class="text-dark nav-link" to="/tools">Previous</router-link>
  <hr />
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-6">
        <div class="mb-3">
          <label for=" todo" class="form-label">Input Todo</label>
          <textarea v-model="displayTask" class="form-control" id=" todo" rows="3"></textarea>
          <button type="button" class="btn btn-primary" id="todo" @click="saveData">Simpan</button>
        </div>
      </div>
      <div class="col-12">
        {{ saved }}
        <table class="table">
          <thead>
            <tr>
              <th scope="col">No.</th>
              <th scope="col">Task</th>
              <th scope="col">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="saved.length > 0">
              <tr v-for="(row, index) in saved" :key="'row-' + index">
                <td>{{ index + 1 }}.</td>
                <td>{{ row.desc }}.</td>
                <td>
                  <button type="button" class="btn btn-primary" @click="editData(index, row)">
                    <i class="fas fa-edit"></i> Edit
                  </button>
                  <button type="button" class="btn btn-danger" @click="deleteData(index, row)">
                    <i class="fas fa-trash-alt"></i> Delete
                  </button>
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
      displayTask: '',
      state: '',
      edit: {},
      // formatData: {
      //   isSelected: false,
      //   number: 0,
      //   desc: '',
      //   done: false,
      // },
    }
  },
  methods: {
    saveData() {
      let formatData = {
        desc: this.displayTask,
        done: false,
      }
      if (formatData.desc != '' && this.state == '') {
        this.saved.push(formatData)
        this.displayTask = ''
      } else if (formatData.desc != '' && this.state == 'edit') {
      }
    },
    resetForm() {
      this.displayTask = ''
      this.formatData.number = 0
      this.formatData.isSelected = false
      this.formatData.desc = ''
      this.formatData.done = false
    },
    editData(index, row) {
      this.edit = this.saved[index]
      console.log(this.edit)
      this.displayTask = this.edit.desc
      this.state = 'edit'
      console.log(this.state)
    },
    deleteData(index, row) {
      this.saved.splice(index, 1)
    },
  },
}
</script>
