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
      <v-container fluid>
        <v-row>
          <v-col cols="4">
            <v-subheader>型形式</v-subheader>
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>型サイズ</v-subheader>
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>取り数</v-subheader>
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>シート枚数</v-subheader>
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>料金</v-subheader>
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>料金（税込）</v-subheader>
          </v-col>
          <v-col cols="8"> </v-col>
        </v-row>
      </v-container>
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
    return {};
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
