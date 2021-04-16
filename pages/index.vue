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
        <v-text-field outlined label="担当者名前"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>電話番号（半角）</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="電話番号（半角）"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>メールアドレス（半角）</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="メールアドレス（半角）"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>ご住所</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="ご住所"></v-text-field>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>お問い合わせ項目</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-select
          :items="formTypes"
          label="お問い合わせ項目"
          outlined
          @change="changeFormTypes"
        ></v-select>
      </v-col>
    </v-row>

    <div v-if="showMitsumori">
      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>制作項目</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            v-model="e7"
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
          <v-select :items="usings" label="使用用途" outlined></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>具体的用途</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-textarea outlined label="具体的用途"></v-textarea>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>発注時期</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field outlined label="発注時期"></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>希望納期</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-text-field outlined label="希望納期"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>型形式</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-checkbox
            v-model="type1"
            label="平型"
            hide-details
            @change="changeType1"
          ></v-checkbox>
          <v-checkbox
            v-model="type2"
            label="ヌスミ型"
            hide-details
            @change="changeType2"
          ></v-checkbox>
          <v-checkbox
            v-model="type3"
            label="平型両面"
            hide-details
            @change="changeType3"
          ></v-checkbox>
          <v-checkbox
            v-model="type4"
            label="ヌスミ両面型"
            hide-details
            @change="changeType4"
          ></v-checkbox>
          <v-checkbox
            v-model="type5"
            label="容器型"
            hide-details
            @change="changeType5"
          ></v-checkbox>
          <v-checkbox
            v-model="type6"
            label="その他異形"
            hide-details
            @change="changeType6"
          ></v-checkbox>
        </v-col>
      </v-row>

      <!-- 平型 -->
      <v-row v-show="showType1">
        <v-col cols="12" class="headline"> ■平型入力項目 </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>平型 樹脂型サイズ</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            :items="hiragataSizes"
            label="平型 樹脂型サイズ"
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
      <!-- ヌスミ型 -->
      <v-row v-show="showType2">
        <v-col cols="12" class="headline"> ■ヌスミ型入力項目 </v-col>
        <v-col sm="4" cols="12">
          <v-subheader>ヌスミ 樹脂型サイズ</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            :items="nusumiSizes"
            label="ヌスミ 樹脂型サイズ"
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

      <!-- 平型両面 -->
      <v-row v-show="showType3">
        <v-col cols="12" class="headline"> ■平型両面項目 </v-col>
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

      <!-- ヌスミ両面型 -->
      <v-row v-show="showType4">
        <v-col cols="12" class="headline"> ■ヌスミ両面型 </v-col>
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

      <!-- 容器型 -->
      <v-row v-show="showType5">
        <v-col cols="12" class="headline"> ■容器型 </v-col>
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

      <!-- その他異形 -->
      <v-row v-show="showType6">
        <v-col cols="12" class="headline"> ■その他異形 </v-col>
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

    <div v-if="showSoudan">
      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>制作項目</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-select
            v-model="e7"
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
          <v-select :items="usings" label="使用用途" outlined></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" cols="12">
          <v-subheader>お問い合わせ内容</v-subheader>
        </v-col>
        <v-col sm="8" cols="12">
          <v-textarea outlined label="お問い合わせ内容"></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer />
        <v-btn class="success" @click="toSoudan">確認</v-btn>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formTypes: ["選択してください", "見積もり依頼", "ご相談"],
      createTypes: ["試作", "テスト品", "量産"],
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
      showType1: false,
      showType2: false,
      showType3: false,
      showType4: false,
      showType5: false,
      showType6: false,
      showMitsumori: false,
      showSoudan: false,
      price: {
        hira: {
          size: {
            thickness10: {
              1: 35000,
              2: 38500,
              3: 42000,
              4: 49000,
              5: 52500,
              6: 56000,
              7: 59500,
              8: 63000,
              9: 66500,
              10: 70000,
              12: 78750,
              15: 80500,
              16: 82250,
              18: 84000,
              20: 85750,
            },
            thickness15: {
              1: 50000,
              2: 55000,
              3: 60000,
              4: 70000,
              5: 75000,
              6: 80000,
              7: 85000,
              8: 90000,
              9: 95000,
              10: 100000,
              12: 112500,
              15: 115000,
              16: 117500,
              18: 120000,
              20: 122500,
            },
          },
          sheetUnit: {
            thickness10: {
              1: 10000,
              2: 9500,
              3: 9000,
              4: 8500,
              5: 8000,
              6: 7500,
              7: 7000,
              8: 6500,
              9: 6000,
              10: 5500,
            },
            thickness15: {
              1: 12000,
              2: 11500,
              3: 11000,
              4: 10500,
              5: 10000,
              6: 9500,
              7: 9000,
              8: 8500,
              9: 8000,
              10: 7500,
            },
          },
        },
        nusumi: {
          size: {
            thickness20: {
              1: 60000,
              2: 66000,
              3: 72000,
              4: 84000,
              5: 90000,
              6: 96000,
              7: 102000,
              8: 108000,
              9: 114000,
              10: 120000,
              12: 135000,
              15: 138000,
              16: 141000,
              18: 144000,
              20: 147000,
            },
            thickness30: {
              1: 80000,
              2: 88000,
              3: 96000,
              4: 112000,
              5: 120000,
              6: 128000,
              7: 136000,
              8: 144000,
              9: 152000,
              10: 160000,
              12: 180000,
              15: 184000,
              16: 188000,
              18: 192000,
              20: 196000,
            },
          },
          sheetUnit: {
            thickness20: {
              1: 10000,
              2: 9500,
              3: 9000,
              4: 8500,
              5: 8000,
              6: 7500,
              7: 7000,
              8: 6500,
              9: 6000,
              10: 5500,
            },
            thickness30: {
              1: 12000,
              2: 11500,
              3: 11000,
              4: 10500,
              5: 10000,
              6: 9500,
              7: 9000,
              8: 8500,
              9: 8000,
              10: 7500,
            },
          },
        },
      },
    };
  },
  computed: {
    showEstimate() {
      return (
        this.showType1 ||
        this.showType2 ||
        this.showType3 ||
        this.showType4 ||
        this.showType5 ||
        this.showType6
      );
    },
    companyName: {
      get() {
        return this.$store.state.companyName;
      },
      set(value) {
        this.$store.commit("setCompanyName", value);
      },
    },
  },
  methods: {
    changeFormTypes(value) {
      // "見積もり依頼", "ご相談"
      if (value === "見積もり依頼") {
        this.showMitsumori = true;
        this.showSoudan = false;
      } else if (value === "ご相談") {
        this.showMitsumori = false;
        this.showSoudan = true;
      } else {
        this.showMitsumori = false;
        this.showSoudan = false;
      }
    },
    changeType1(value) {
      this.showType1 = value;
    },
    changeType2(value) {
      this.showType2 = value;
    },
    changeType3(value) {
      this.showType3 = value;
    },
    changeType4(value) {
      this.showType4 = value;
    },
    changeType5(value) {
      this.showType5 = value;
    },
    changeType6(value) {
      this.showType6 = value;
    },
    toSoudan() {
      this.$router.push("/confirm/soudan");
    },
    toMitsumori() {
      this.$router.push("/confirm/mitsumori");
    },
  },
};
</script>
