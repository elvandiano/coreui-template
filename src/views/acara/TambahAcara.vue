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
                                            label="Nama Acara"
                                            label-for="nameAcara"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="nameAcara" class="form-control" type="text"
                                                      placeholder="Nama Acara"></b-form-input>
                                        <b-form-invalid-feedback>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group
                                            label="Tanggal"
                                            label-for="tanggal "
                                            :label-cols="3"
                                            :horizontal="true">
                                        <div class="row">
                                            <div class="col-md-5">
                                            <date-picker
                                                    id="tanggal"
                                                    placeholder="Tanggal Mulai (dd/mm/yyyy)"
                                                    v-model.trim="tglMulai"
                                                    :config="configTimePicker"></date-picker>
                                            </div>
                                            <div class="col-md-1" align="center">
                                                <p>_</p>
                                            </div>
                                            <div class="col-md-6">
                                                <date-picker
                                                        id="tanggal1"
                                                        placeholder="Tanggal Selesai (dd/mm/yyyy)"
                                                        v-model.trim="tglSelesai"
                                                        :config="configTimePicker"></date-picker>
                                            </div>
                                        </div>
                                    </b-form-group>
                                    <b-form-group
                                            label="Waktu"
                                            label-for="waktu"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <div class="row">
                                            <div class="col-md-5">
                                                <date-picker
                                                        id="waktu"
                                                        placeholder="Waktu Mulai (hh:mm)"
                                                        v-model.trim="$v.waktuMulai.$model"
                                                        :config="configTimePickerJam"></date-picker>
                                            </div>
                                            <div class="col-md-1" align="center">
                                                <p>_</p>
                                            </div>
                                            <div class="col-md-6">
                                                <date-picker
                                                        id="waktu1"
                                                        placeholder="Waktu Selesai (hh:mm)"
                                                        v-model.trim="$v.waktuSelesai.$model"
                                                        :config="configTimePickerJam"></date-picker>
                                            </div>
                                        </div>
                                    </b-form-group>
                                    <b-form-group
                                            label="Alamat 1"
                                            label-for="address1"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="address1" class="form-control" type="text"
                                                      placeholder="Alamat 1"></b-form-input>
                                        <b-form-invalid-feedback>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group
                                            label="Alamat 2"
                                            label-for="address2"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="address2" class="form-control" type="text"
                                                      placeholder="Alamat 2"></b-form-input>
                                        <b-form-invalid-feedback>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group
                                            label="Alamat 3"
                                            label-for="address3"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="address3" class="form-control" type="text"
                                                      placeholder="Alamat 3"></b-form-input>
                                        <b-form-invalid-feedback>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group
                                            label="Latitude"
                                            label-for="latitude"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="latitude" class="form-control" type="text"
                                                      placeholder="Latitude"></b-form-input>
                                        <b-form-invalid-feedback>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group
                                            label="Longtitude"
                                            label-for="longtitude"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="longtitude" class="form-control" type="text"
                                                      placeholder="Longtitude"></b-form-input>
                                        <b-form-invalid-feedback>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group
                                            label="Nama PIC"
                                            label-for="picName"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="picName" class="form-control" type="text"
                                                      placeholder="Nama PIC"></b-form-input>
                                        <b-form-invalid-feedback>
                                        </b-form-invalid-feedback>
                                    </b-form-group>
                                    <b-form-group
                                            label="No. Telp PIC"
                                            label-for="picPhone"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="picPhone" class="form-control"
                                                      v-mask="'################'" type="text"
                                                      placeholder="Nomor telepon PIC"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            v-if="!background"
                                            label="Background"
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
                                        <b-button type="reset" to="/acara" size="sm"
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
                background: '',
                fileUpload: '',

                waktuMulai: '',
                waktuSelesai: '',

                tglMulai: '',
                tglSelesai: '',


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
            waktuMulai: {},
            waktuSelesai: {}
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