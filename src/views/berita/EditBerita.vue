<template>
    <div class="animated fadeIn">
        <b-card no-body>
            <b-card-body>
                <div class="form-group">
                    <b-row>
                        <b-col md="12">
                            <b-card>
                                <b-form @submit.prevent>
                                    <b-form-group
                                            label="Tanggal"
                                            label-for="tanggal"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <date-picker
                                                id="tanggal"
                                                placeholder="Tanggal (dd/mm/yyyy)"
                                                v-model.trim="tglTransaksi"
                                                :config="configTimePicker"></date-picker>
                                    </b-form-group>
                                    <b-form-group
                                            label="Waktu"
                                            label-for="jamBuka"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <date-picker
                                                placeholder="Waktu"
                                                v-model.trim="$v.jamBuka.$model"
                                                :config="configTimePickerJam"></date-picker>
                                    </b-form-group>
                                    <b-form-group
                                            label="Judul"
                                            label-for="judul"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="judul" class="form-control" type="text"
                                                      placeholder="Judul"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Kontent"
                                            label-for="kontent"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="kontent" class="form-control" type="text"
                                                      placeholder="Kontent"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            v-if="!background"
                                            label="Foto"
                                            label-for="background"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-file id="background"
                                                     placeholder="Choose file..."
                                                     class="col-md-6"
                                                     v-model="fileUpload"
                                                     @change="onFileChange"
                                                     accept=".jpg, .png, .bmp"></b-form-file>
                                    </b-form-group>
                                    <div class="row" v-else>
                                        <div class="col-md-1">
                                            <label>Background</label>
                                        </div>
                                        <div class="col-md-6 text-center">
                                            <img :src="background" id="img_upload"/>
                                            <b-button variant="danger"
                                                      size="sm"
                                                      @click="removeImage">
                                                Hapus Gambar
                                            </b-button>
                                        </div>
                                    </div>
                                    <div slot="footer">
                                        <b-button type="submit" size="sm" variant="primary">
                                            <i class="fa fa-save"></i> Simpan
                                        </b-button>
                                        <b-button type="reset" to="/berita" size="sm"
                                                  variant="danger" class="ml-2"><i
                                                class="fa fa-ban"></i> Tutup
                                        </b-button>
                                    </div>
                                </b-form>
                            </b-card>
                        </b-col>
                    </b-row>
                </div>
            </b-card-body>
        </b-card>
    </div>
</template>

<script>

    import moment from 'moment';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';

    export default {
        components: {
            datePicker
        },
        data() {
            return {
                id : this.$route.params.id,
                background: '',
                fileUpload: '',

                jamBuka: '',
                tglTransaksi: '',


                // config datepicker
                configTimePicker: {
                    format: 'DD/MM/YYYY',
                    showClear: true,
                    showClose: true
                },
                configTimePickerJam: {
                    format: 'HH:mm',
                    showClear: true,
                    showClose: true,
                },
            }
        },
        validations: {
            jamBuka: {}
        },
        methods: {
            removeImage: function () {
                this.background = '';
                this.fileUpload = '';
            },
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;

                this.fileUpload = files;
                this.createImage(files[0]);
            },
            createImage(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.background = e.target.result;
                };
                reader.readAsDataURL(file);
            },

        }
    }
</script>

<style scoped>
    #input-nama {
        width: 300px;
    }

    #img_upload {
        width: 30%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
    }
</style>