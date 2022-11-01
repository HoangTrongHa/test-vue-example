<template>
  <v-row justify="center">
    <v-dialog :value="dialog" max-width="400" @input="updateDialog">
      <v-card>
        <v-card-title class="text-h5"> Chuẩn Chưa </v-card-title>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" text @click="updateDialog(false)">
            Chưa
          </v-btn>

          <v-btn color="green darken-1" text @click="confirm"> Chuẩn </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script lang="ts">
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
// import Employee from "../../types/Employee";
// import EmployeeDataService from "../../business/B_employee"

@Component
export default class Alert extends Vue {
  @Prop() readonly dialog?: boolean;

  @Emit("update-dialog")
  updateDialog(e: boolean) {
    return e;
  }

  @Emit("confirm")
  confirm() {
    this.updateDialog(false);
  }
}
</script>

