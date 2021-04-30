<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="headline"> ■共通入力項目 </v-col>
      <v-col sm="4" cols="12">
        <v-subheader>会社名</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field
          outlined
          label="会社名"
          v-model="companyName"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>担当者名前</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="担当者名前" v-model="name"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>電話番号（半角）</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field
          outlined
          label="電話番号（半角）"
          v-model="phoneNumber"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>メールアドレス（半角）</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field
          outlined
          label="メールアドレス（半角）"
          v-model="email"
        ></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>ご住所</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="ご住所" v-model="address"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>型形式</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-radio-group v-model="kataType">
          <v-radio
            v-for="n in kataTypes"
            :key="n"
            :label="n"
            :value="n"
          ></v-radio>
        </v-radio-group>
      </v-col>
    </v-row>

    <!-- 見積もり -->
    <div v-if="showMitsumori">
      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>制作項目</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            :items="createTypes"
            label="制作項目"
            multiple
            chips
            hint="※複数選択可"
            persistent-hint
            outlined
            v-model="mitsumoriItem"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>使用用途</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            :items="usings"
            label="使用用途"
            outlined
            v-model="mitsumoriUse"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>具体的用途</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-textarea
            outlined
            label="具体的用途"
            v-model="mitsumoriConcrete"
          ></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>発注時期</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field
            outlined
            label="発注時期"
            v-model="mitsumoriOrderDate"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>希望納期</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field
            outlined
            label="希望納期"
            v-model="mitsumoriDeliverlyDate"
          ></v-text-field>
        </v-col>
      </v-row>

      <!-- hira -->
      <v-row v-if="showTypeHira">
        <v-col cols="12" class="headline"> ■{{ kataType }}入力項目 </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>{{ kataType }} 樹脂型サイズ</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            :items="hiragataSizes"
            :label="`${kataType}樹脂型サイズ`"
            outlined
          ></v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-subheader
            >製品の取り数（製作個数 ※シート1枚に作る型の個数）</v-subheader
          >
        </v-col>
        <v-col sm="8" cols="12">
          <v-select :items="torisu" label="製品の取り数" outlined></v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>シート枚数</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select :items="sheets" label="シート枚数" outlined></v-select>
        </v-col>
      </v-row>

      <!-- nusumi -->
      <v-row v-if="showTypeNusumi">
        <v-col cols="12" class="headline"> ■{{ kataType }}入力項目 </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>{{ kataType }} 樹脂型サイズ</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            :items="nusumiSizes"
            :label="`${kataType}樹脂型サイズ`"
            outlined
          ></v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-subheader
            >製品の取り数（製作個数 ※シート1枚に作る型の個数）</v-subheader
          >
        </v-col>
        <v-col sm="8" cols="12">
          <v-select :items="torisu" label="製品の取り数" outlined></v-select>
        </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>シート枚数</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select :items="sheets" label="シート枚数" outlined></v-select>
        </v-col>
      </v-row>

      <!-- other -->
      <v-row v-show="showTypeOther">
        <v-col cols="12" class="headline"> ■{{ kataType }}両面型 </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>制作個数</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field
            outlined
            label="制作個数"
            placeholder="例：試作品5個、量産300個"
          ></v-text-field>
        </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>製品サイズ(型1つのサイズ)</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field
            outlined
            label="製品サイズ"
            placeholder="例：200×100×30(mm)"
          ></v-text-field>
        </v-col>

        <v-col sm="4" cols="12">
          <v-subheader>添付ファイル１（5MBまで）</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-file-input
            label="添付ファイル１"
            placeholder="ファイルを選択してください"
            prepend-icon="mdi-paperclip"
            outlined
          >
          </v-file-input>
        </v-col>

        <v-col sm="4" cols="12">
          <v-subheader>添付ファイル2（5MBまで）</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-file-input
            label="添付ファイル2"
            placeholder="ファイルを選択してください"
            prepend-icon="mdi-paperclip"
            outlined
          >
          </v-file-input>
        </v-col>

        <v-col sm="4" cols="12">
          <v-subheader>お問い合わせ内容</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-textarea outlined label="お問い合わせ内容"></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-spacer />
        <v-btn class="success" @click="toMitsumori">確認</v-btn>
      </v-row>
    </div>
    <!-- 見積もり -->

    <!-- 相談 -->
    <div v-if="showSoudan">
      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>制作項目</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            v-model="soudanItem"
            :items="createTypes"
            label="制作項目"
            multiple
            chips
            hint="※複数選択可"
            persistent-hint
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>使用用途</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            :items="usings"
            label="使用用途"
            outlined
            v-model="soudanUse"
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>発注時期</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field
            outlined
            label="発注時期"
            v-model="soudanOrderDate"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>希望納期</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field
            outlined
            label="希望納期"
            v-model="soudanDeliverlyDate"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>お問い合わせ内容</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-textarea
            outlined
            label="お問い合わせ内容"
            v-model="soudanComment"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer />
        <v-btn class="success" @click="toSoudan">確認</v-btn>
      </v-row>
    </div>
    <!-- 相談 -->
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formTypes: ["選択してください", "見積もり依頼", "ご相談"],
      createTypes: ["試作/テスト品", "量産"],
      kataTypes: [
        "平型",
        "ヌスミ型",
        "平型両面",
        "ヌスミ両面型",
        "容器型",
        "わからない",
      ],
      kataType: null,
      usings: ["食品用", "工業用", "その他"],
      hiragataSizes: ["①150×200 厚み10mm", "②200×300 厚み15mm"],
      nusumiSizes: ["①150×200 厚み20mm", "②200×300 厚み30mm"],
      torisu: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "12",
        "15",
        "16",
        "18",
        "20",
      ],
      sheets: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "10枚以上"],
      type1: "",
      type2: "",
      type3: "",
      type4: "",
      type5: "",
      type6: "",
      showTypeHira: false,
      showTypeNusumi: false,
      showTypeOther: false,
      showMitsumori: false,
      showSoudan: false,
    };
  },
  computed: {
    showEstimate() {
      return this.showTypeHira || this.showTypeNusumi || this.showTypeOther;
    },
    companyName: {
      get() {
        return this.$store.state.companyName;
      },
      set(value) {
        this.$store.commit("setCompanyName", value);
      },
    },
    name: {
      get() {
        return this.$store.state.name;
      },
      set(value) {
        this.$store.commit("setName", value);
      },
    },
    phoneNumber: {
      get() {
        return this.$store.state.phoneNumber;
      },
      set(value) {
        this.$store.commit("setPhoneNumber", value);
      },
    },
    email: {
      get() {
        return this.$store.state.email;
      },
      set(value) {
        this.$store.commit("setEmail", value);
      },
    },
    address: {
      get() {
        return this.$store.state.address;
      },
      set(value) {
        this.$store.commit("setAddress", value);
      },
    },
    soudanItem: {
      get() {
        return this.$store.state.soudan.item;
      },
      set(value) {
        this.$store.commit("setSoudanItem", value);
      },
    },
    soudanUse: {
      get() {
        return this.$store.state.soudan.use;
      },
      set(value) {
        this.$store.commit("setSoudanUse", value);
      },
    },
    soudanComment: {
      get() {
        return this.$store.state.soudan.comment;
      },
      set(value) {
        this.$store.commit("setSoudanComment", value);
      },
    },
    soudanOrderDate: {
      get() {
        return this.$store.state.soudan.orderDate;
      },
      set(value) {
        this.$store.commit("setSoudanOrderDate", value);
      },
    },
    soudanDeliverlyDate: {
      get() {
        return this.$store.state.soudan.deliverlyDate;
      },
      set(value) {
        this.$store.commit("setSoudanDeliverlyDate", value);
      },
    },
    selectedFormType: {
      get() {
        return this.$store.state.selectedFormType;
      },
      set(value) {
        this.$store.commit("setSelectedFormType", value);
      },
    },
    mitsumoriItem: {
      get() {
        return this.$store.state.mitsumori.item;
      },
      set(value) {
        this.$store.commit("setMitsumoriItem", value);
      },
    },
    mitsumoriUse: {
      get() {
        return this.$store.state.mitsumori.use;
      },
      set(value) {
        this.$store.commit("setMitsumoriUse", value);
      },
    },
    mitsumoriConcrete: {
      get() {
        return this.$store.state.mitsumori.concrete;
      },
      set(value) {
        this.$store.commit("setMitsumoriConcrete", value);
      },
    },
    mitsumoriOrderDate: {
      get() {
        return this.$store.state.mitsumori.orderDate;
      },
      set(value) {
        this.$store.commit("setMitsumoriOrderDate", value);
      },
    },
    mitsumoriDeliverlyDate: {
      get() {
        return this.$store.state.mitsumori.deliverlyDate;
      },
      set(value) {
        this.$store.commit("setMitsumoriDeliverlyDate", value);
      },
    },
  },
  watch: {
    kataType: function (value) {
      // "見積もり依頼", "ご相談"
      switch (value) {
        case "平型":
          this.showMitsumori = true;
          this.showSoudan = false;
          this.showTypeHira = true;
          this.showTypeNusumi = false;
          this.showTypeOther = false;
          break;

        case "ヌスミ型":
          this.showMitsumori = true;
          this.showSoudan = false;
          this.showTypeHira = false;
          this.showTypeNusumi = true;
          this.showTypeOther = false;
          break;

        case "わからない":
          this.showMitsumori = false;
          this.showSoudan = true;
          break;

        default:
          this.showMitsumori = true;
          this.showTypeHira = false;
          this.showTypeNusumi = false;
          this.showTypeOther = true;
          this.showSoudan = false;
          break;
      }
    },
  },
  methods: {
    toSoudan() {
      this.$router.push("/confirm/soudan");
    },
    toMitsumori() {
      // データの詰め替え
      this.$router.push("/confirm/mitsumori");
    },
  },
};
</script>
