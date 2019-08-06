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
                                            label="Nama Pemerintah"
                                            label-for="nameAcara"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="nameAcara" class="form-control" type="text"
                                                      placeholder="Nama Acara"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Provinsi"
                                            label-for="profinsi"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="profinsi" class="form-control" type="text"
                                                      placeholder="Nama Acara"></b-form-input>
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
                                                      placeholder="Longtitude"></b-form-input>
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
                                            label="Nama Kepala Daerah"
                                            label-for="NameKD"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="NameKD" class="form-control" type="text"
                                                      placeholder="Nama Kepala Daerah"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Nama Wakil Kepala Daerah"
                                            label-for="NameWKD"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="NameWKD" class="form-control" type="text"
                                                      placeholder="Nama Wakil Kepala Daerah"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Website Pemerintah"
                                            label-for="web"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="web" class="form-control" type="text"
                                                      placeholder="Alamat Website Pemerintah"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Facebook"
                                            label-for="fb"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="fb" class="form-control" type="text"
                                                      placeholder="Alamat Facebook"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Instagram"
                                            label-for="ig"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="ig" class="form-control" type="text"
                                                      placeholder="Alamat Instagram"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="WhatsApp"
                                            label-for="wa"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="wa" class="form-control" type="text"
                                                      placeholder="No WhatsApp"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            label="Deskripsi"
                                            label-for="de"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-input id="de" class="form-control" type="text"
                                                      placeholder="Deskripsi"></b-form-input>
                                    </b-form-group>
                                    <b-form-group
                                            v-if="!background"
                                            label="Foto Kepala Daerah"
                                            label-for="FKD"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-file id="FKD"
                                                     placeholder="Choose file..."
                                                     class="col-md-6"
                                                     v-model="fileUpload"
                                                     @change="onFileChange"
                                                     accept=".jpg, .png, .bmp"></b-form-file>
                                    </b-form-group>
                                    <div class="row" v-else>
                                        <div class="col-md-1">
                                            <label>Foto Kepala Daerah</label>
                                        </div>
                                        <div class="col-md-6 text-center" style="margin-bottom: 10px">
                                            <img :src="background" id="img_upload"/>
                                            <b-button variant="danger"
                                                      size="sm"
                                                      @click="removeKepalaDaerah">
                                                Hapus Gambar
                                            </b-button>
                                        </div>
                                    </div>
                                    <b-form-group
                                            v-if="!background1"
                                            label="Foto Wakil Kepala Daerah"
                                            label-for="FWKD"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-file id="FWKD"
                                                     placeholder="Choose file..."
                                                     class="col-md-6"
                                                     v-model="fileUpload1"
                                                     @change="onFileChange1"
                                                     accept=".jpg, .png, .bmp"></b-form-file>
                                    </b-form-group>
                                    <div class="row" v-else>
                                        <div class="col-md-1">
                                            <label>Foto Wakil Kepala Daerah</label>
                                        </div>
                                        <div class="col-md-6 text-center" style="margin-bottom: 10px">
                                            <img :src="background1" id="img_wakil_upload"/>
                                            <b-button variant="danger"
                                                      size="sm"
                                                      @click="removeWakil">
                                                Hapus Gambar
                                            </b-button>
                                        </div>
                                    </div>
                                    <b-form-group
                                            v-if="!logo"
                                            label="Foto Logo"
                                            label-for="logo"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-file id="logo"
                                                     placeholder="Choose file..."
                                                     class="col-md-6"
                                                     v-model="fileUploadLogo"
                                                     @change="onFileChange2"
                                                     accept=".jpg, .png, .bmp"></b-form-file>
                                    </b-form-group>
                                    <div class="row" v-else>
                                        <div class="col-md-1">
                                            <label>Foto Logo</label>
                                        </div>
                                        <div class="col-md-6 text-center" style="margin-bottom: 10px">
                                            <img :src="logo" id="img_logo_upload"/>
                                            <b-button variant="danger"
                                                      size="sm"
                                                      @click="removeLogo">
                                                Hapus Gambar
                                            </b-button>
                                        </div>
                                    </div>
                                    <b-form-group
                                            v-if="!bgron"
                                            label="Background"
                                            label-for="bg"
                                            :label-cols="3"
                                            :horizontal="true">
                                        <b-form-file id="bg"
                                                     placeholder="Choose file..."
                                                     class="col-md-6"
                                                     v-model="fileUploadbgron"
                                                     @change="onFileChange3"
                                                     accept=".jpg, .png, .bmp"></b-form-file>
                                    </b-form-group>
                                    <div class="row" v-else>
                                        <div class="col-md-1">
                                            <label>Background</label>
                                        </div>
                                        <div class="col-md-6 text-center" style="margin-bottom: 10px">
                                            <img :src="bgron" id="img_background_upload"/>
                                            <b-button variant="danger"
                                                      size="sm"
                                                      @click="removebgron">
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
                background1: '',
                logo: '',
                bgron: '',

                fileUpload: '',
                fileUpload1: '',
                fileUploadLogo: '',
                fileUploadbgron: '',

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
            removeKepalaDaerah: function () {
                this.background = '';
                this.fileUpload = '';
            },
            removeWakil: function () {
                this.background1 = '';
                this.fileUpload1 = '';
            },
            removeLogo: function () {
                this.logo = '';
                this.fileUploadLogo = '';
            },
            removebgron: function () {
                this.bgron = '';
                this.fileUploadbgron = '';
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

            onFileChange1(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;

                this.fileUpload1 = files;
                this.createImage1(files[0]);
            },
            createImage1(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.background1 = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            onFileChange2(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;

                this.fileUploadLogo = files;
                this.createImage2(files[0]);
            },
            createImage2(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.logo = e.target.result;
                };
                reader.readAsDataURL(file);
            },
            onFileChange3(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;

                this.fileUploadbgron = files;
                this.createImage3(files[0]);
            },
            createImage3(file) {
                let reader = new FileReader();
                reader.onload = (e) => {
                    this.bgron = e.target.result;
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

    #img_upload, #img_wakil_upload ,#img_logo_upload ,#img_background_upload {
        width: 30%;
        margin: auto;
        display: block;
        margin-bottom: 10px;
    }
</style>