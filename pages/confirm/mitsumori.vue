<template>
  <v-container fluid>
    <!-- 基本情報 -->
    <v-row>
      <v-col cols="12" class="headline"> 基本情報 </v-col>
    </v-row>
    <v-row>
      <v-container fluid>
        <v-row>
          <v-col cols="4">
            <v-subheader>会社名</v-subheader>
          </v-col>
          <v-col cols="8"> {{ companyName }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>担当者名前</v-subheader>
          </v-col>
          <v-col cols="8"> {{ name }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>電話番号（半角）</v-subheader>
          </v-col>
          <v-col cols="8"> {{ phoneNumber }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>メールアドレス（半角）</v-subheader>
          </v-col>
          <v-col cols="8"> {{ email }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>ご住所</v-subheader>
          </v-col>
          <v-col cols="8"> {{ address }} </v-col>
        </v-row>
      </v-container>
    </v-row>
    <!-- 基本情報 -->

    <!-- 見積もり内容 -->
    <v-row>
      <v-col cols="12" class="headline"> 見積もり内容（確認） </v-col>
    </v-row>
    <v-row>
      <v-container fluid>
        <v-row>
          <v-col cols="4">
            <v-subheader>制作項目</v-subheader>
          </v-col>
          <v-col cols="8"> {{ mitsumoriItem }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>使用用途</v-subheader>
          </v-col>
          <v-col cols="8"> {{ mitsumoriUse }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>具体的用途</v-subheader>
          </v-col>
          <v-col cols="8"> {{ mitsumoriConcrete }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>発注時期</v-subheader>
          </v-col>
          <v-col cols="8"> {{ mitsumoriOrderDate }} </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>希望納期</v-subheader>
          </v-col>
          <v-col cols="8"> {{ mitsumoriDeliverlyDate }} </v-col>
        </v-row>
      </v-container>
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
    <!-- 見積もり内容 -->

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
          name: "平型",
          size: "①150×200 厚み10mm",
          count: 4,
          plateCount: 2,
          price: "¥68,000",
          priceWithTax: "¥74,800",
        },
        {
          name: "平型",
          size: "①150×200 厚み10mm",
          count: 4,
          plateCount: "10枚以上",
          price: "要相談",
          priceWithTax: "要相談",
        },
        {
          name: "ヌスミ型",
          size: "②200×300 厚み30mm",
          count: 16,
          plateCount: 5,
          price: "¥181,000",
          priceWithTax: "¥199,100",
        },
        {
          name: "ヌスミ型",
          size: "②200×300 厚み30mm",
          count: 16,
          plateCount: "10枚以上",
          price: "要相談",
          priceWithTax: "要相談",
        },
        {
          name: "両面平型",
          size: "200×300×30",
          count: 12,
          plateCount: 7,
          price: "要相談",
          priceWithTax: "要相談",
        },
        {
          name: "ヌスミ平型",
          size: "200×100×30",
          count: 2,
          plateCount: "10枚以上",
          price: "要相談",
          priceWithTax: "要相談",
        },
        {
          name: "容器型",
          size: "200×250×30",
          count: 9,
          plateCount: 7,
          price: "要相談",
          priceWithTax: "要相談",
        },
        {
          name: "その他異形",
          size: "150×200×15",
          count: 2,
          plateCount: "10枚以上",
          price: "要相談",
          priceWithTax: "要相談",
        },
        {
          name: "デザイン料（3Dデータ化）",
          size: "",
          count: "",
          plateCount: "",
          price: "¥5,000/デザイン~",
          priceWithTax: "¥5,500/デザイン~",
        },
        {
          name: "",
          size: "",
          count: "",
          plateCount: "",
          price: "",
          priceWithTax: "",
        },
        {
          name: "合計",
          size: "",
          count: "",
          plateCount: "",
          price: "¥30,000 + ¥5,000~（デザイン費用）",
          priceWithTax: "¥33,000 + ¥5,500~（デザイン費用）",
        },
      ],
    };
  },
  computed: {
    companyName: {
      get() {
        return this.$store.state.companyName;
      },
    },
    name: {
      get() {
        return this.$store.state.name;
      },
    },
    phoneNumber: {
      get() {
        return this.$store.state.phoneNumber;
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
    },
    address: {
      get() {
        return this.$store.state.address;
      },
    },
    mitsumoriItem: {
      get() {
        if (this.$store.state.mitsumori.item)
          return this.$store.state.mitsumori.item.join(",");
        else return "";
      },
    },
    mitsumoriUse: {
      get() {
        return this.$store.state.mitsumori.use;
      },
    },
    mitsumoriConcrete: {
      get() {
        return this.$store.state.mitsumori.concrete;
      },
    },
    mitsumoriOrderDate: {
      get() {
        return this.$store.state.mitsumori.orderDate;
      },
    },
    mitsumoriDeliverlyDate: {
      get() {
        return this.$store.state.mitsumori.deliverlyDate;
      },
    },
  },
};
</script>
