<template>
  <h1>Tools</h1>
  <router-link class="text-dark nav-link" to="/tools">Previous</router-link>
  <hr />
  <div class="row">
    <h1>Cart Items</h1>

    <div class="col-12">
      <select
        v-model="selectItems"
        @change="addItem"
        class="form-select form-select-lg mb-3"
        aria-label=".form-select-lg example"
      >
        <option :disabled="option.disabled" v-for="option in items" :value="option">
          {{ option.name }} - Rp. {{ money(option.harga )}}
        </option>
      </select>
      <!-- <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Item</th>
            <th scope="col">Harga</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody v-for="(item, index) in items" :key="index">
          <tr>
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td>Rp. {{ item.harga }}</td>
            <td>
              <a class="btn btn-primary btn-sm" title="Tambah Barang" @click="addCart(item)">Tambah</a>
            </td>
          </tr>
        </tbody>
      </table> -->
    </div>
  </div>
  <div class="row">
    <h1>Cart Items</h1>
    <div class="col-12">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nama Item</th>
            <th scope="col">QTY</th>
            <th scope="col">Harga</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in listCard" :key="index">
            <th scope="row">{{ index + 1 }}</th>
            <td>{{ item.name }}</td>
            <td><input min="1" style="width: 50px" type="number" v-model.number="item.qty" type="text" /></td>
            <td>
              <input :step="100" style="width: 100px" type="number" v-model.number="item.harga" type="text" />
            </td>
            <td style="text-align: justify">{{money( Number(item.qty) * Number(item.harga) )}}</td>
            <td>
              <a class="btn btn-danger btn-sm" title="Tambah Barang" @click="removeCart(item)">Hapus</a>
            </td>
          </tr>
          <tr>
            <td colspan="4"><span style="text-align: right">Total</span></td>
            <td>{{ money(totalCart )}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    totalCart() {
      if (this.listCard.length > 0) {
        let total = []
        this.listCard.forEach((item) => {
          total.push(Number(item.qty) * Number(item.harga))
        })
        return total.reduce((a, b) => a + b, 0)
      } else {
        return 0
      }
    },
  },
  data() {
    return {
      selectItems: {},
      items: [
        {
          name: 'Buku',
          harga: '10000',
          disabled: false,
        },
        {
          name: 'Pensil',
          harga: '2000',
          disabled: false,
        },
        {
          name: 'Penghapus',
          harga: '1000',
          disabled: false,
        },
      ],
      listCard: [],
    }
  },
  methods: {
    money(value) {
      if (!value) return '0,-'
      let reverse = parseInt(value).toString().split('').reverse().join(''),
        k = reverse.match(/\d{1,3}/g)
      return k.join('.').split('').reverse().join('') + ',-'
    },
    addItem() {
      // console.log(this.selectItems)
      let temp = { ...this.selectItems }
      temp.qty = 1
      let exist = this.listCard.find((item) => item.name == temp.name)

      if (typeof exist !== 'undefined') {
        // this.listCard.find((item) => item.name == temp.name).qty += 1
        alert('Item sudah terpilih!')
      } else {
        this.listCard.push(temp)
        this.items.find((item) => item.name == temp.name).disabled = true
      }
      this.selectItems = {}
      // this.listCard.push(data)
    },
    addCart(data) {},
    removeCart(data) {
      // if (data.qty > 1) {
      //   data.qty -= 1
      // } else {
      let idx = this.listCard.indexOf(data)
      this.listCard.splice(idx, 1)
      this.items.find((item) => item.name == data.name).disabled = false

      // }
    },
  },
}
</script>
