<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="headline"> ■共通入力項目 </v-col>
      <v-col sm="4" cols="12">
        <v-subheader>会社名</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="会社名" value=""></v-text-field>
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
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col sm="4" cols="12">
        <v-subheader>制作項目</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-select :items="createTypes" label="制作項目" outlined></v-select>
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
        <v-subheader>具体的用途</v-subheader>
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
        <v-subheader>発注時期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="発注時期"></v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-subheader>希望納期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="希望納期"></v-text-field>
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
        <v-subheader>発注時期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="発注時期"></v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-subheader>希望納期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="希望納期"></v-text-field>
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
        <v-subheader>発注時期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="発注時期"></v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-subheader>希望納期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="希望納期"></v-text-field>
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
        <v-subheader>発注時期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="発注時期"></v-text-field>
      </v-col>

      <v-col sm="4" cols="12">
        <v-subheader>希望納期</v-subheader>
      </v-col>
      <v-col sm="8" cols="12">
        <v-text-field outlined label="希望納期"></v-text-field>
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
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      formTypes: ["見積もり依頼", "ご相談"],
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
    };
  },
  methods: {
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
  },
};
</script>
