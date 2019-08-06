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
                                            label="Nama Lokasi"
                                            label-for="nameLokasi"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="nameLokasi" class="form-control" type="text"
                                                      placeholder="Nama Lokasi"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Tipe Lokasi"
                                            label-for="tipeLokasi"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="tipeLokasi" class="form-control" type="text"
                                                      placeholder="Tipe Lokasi"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Nama Tipe Lokasi"
                                            label-for="nameTipeLokasi"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="nameTipeLokasi" class="form-control" type="text"
                                                      placeholder="Nama Tipe Lokasi"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Alamat 1"
                                            label-for="address1"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="address1" class="form-control" type="text"
                                                      placeholder="Alamat 1"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Alamat 2"
                                            label-for="address2"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="address2" class="form-control" type="text"
                                                      placeholder="Alamat 2"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Alamat 3"
                                            label-for="address3"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="address3" class="form-control" type="text"
                                                      placeholder="Alamat 3"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Kode Pos"
                                            label-for="kodepos"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="kodepos" class="form-control" type="text"
                                                      placeholder="Kode Pos"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Latitude"
                                            label-for="latitude"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="latitude" class="form-control" type="text"
                                                      placeholder="Latitude"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Longtitude"
                                            label-for="longtitude"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="longtitude" class="form-control" type="text"
                                                      placeholder="Longtitude"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Email"
                                            label-for="email"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="email" class="form-control" type="text"
                                                      placeholder="Email"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="No. Telp"
                                            label-for="Phone"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="Phone" class="form-control"
                                                      v-mask="'################'" type="text"
                                                      placeholder="Nomor telepon"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Deskripsi"
                                            label-for="des"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="des" class="form-control" type="text"
                                                      placeholder="Deskripsi"></b-form-input>
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
                                        <b-button type="reset" to="/lokasi" size="sm"
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