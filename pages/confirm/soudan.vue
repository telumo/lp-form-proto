<template>
  <v-container fluid>
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
    <v-row>
      <v-col cols="12" class="headline"> ご相談内容（確認） </v-col>
    </v-row>
    <v-row>
      <v-container fluid>
        <v-row>
          <v-col cols="4">
            <v-subheader>制作項目</v-subheader>
          </v-col>
          <v-col cols="8"> 量産 </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>使用用途</v-subheader>
          </v-col>
          <v-col cols="8"> 食品用 </v-col>
        </v-row>

        <v-row>
          <v-col cols="4">
            <v-subheader>お問い合わせ内容</v-subheader>
          </v-col>
          <v-col cols="8"> とりあえずお話させてください。 </v-col>
        </v-row>
      </v-container>
    </v-row>
    <v-row>
      <v-spacer />
      <v-btn class="success">送信</v-btn>
    </v-row>
  </v-container>
</template>


<script>
export default {
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
  },
};
</script>
