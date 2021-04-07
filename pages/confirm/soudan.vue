<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="headline"> ご相談内容（確認） </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-simple-table>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">項目</th>
                <th class="text-left">回答</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in items" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.answer }}</td>
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
        { name: "制作項目", answer: "量産" },
        { name: "使用用途", answer: "食品用" },
        { name: "お問い合わせ内容", answer: "とりあえずお話させてください。" },
      ],
    };
  },
};
</script>
