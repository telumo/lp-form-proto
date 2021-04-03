<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="headline"> 見積もり内容（確認） </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">商品名（型）</th>
                <th class="text-left">型サイズ</th>
                <th class="text-left">取り数</th>
                <th class="text-left">シリコンプレート枚数</th>
                <th class="text-left">料金(税抜)</th>
                <th class="text-left">料金(税込み)</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.size }}</td>
                <td>{{ item.count }}</td>
                <td>{{ item.plateCount }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.priceWithTax }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
    <v-row>
      <v-spacer />
      <v-btn class="success">送信</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          name: "平型150*200",
          size: "100*100",
          count: 4,
          plateCount: 2,
          price: 10000,
          priceWithTax: 11000,
        },
        {
          name: "平型150*200",
          size: "100*100",
          count: 4,
          plateCount: 2,
          price: 10000,
          priceWithTax: 11000,
        },
        {
          name: "平型150*200",
          size: "100*100",
          count: 4,
          plateCount: 2,
          price: 10000,
          priceWithTax: 11000,
        },
        {
          name: "平型150*200",
          size: "100*100",
          count: 4,
          plateCount: 2,
          price: 10000,
          priceWithTax: 11000,
        },
        {
          name: "平型150*200",
          size: "100*100",
          count: 4,
          plateCount: 2,
          price: 10000,
          priceWithTax: 11000,
        },
      ],
    };
  },
};
</script>
