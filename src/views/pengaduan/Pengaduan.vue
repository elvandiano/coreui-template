<template>
    <div id="app">
        <div class="animated fadeIn">
            <b-card no-body>
                <b-card-body>
                    <div class="form-group">
                        <div class="row ml-0">
                            <b-form-input style="width: 13%" size="sm" v-model="searchInput" placeholder="Search"
                                          id="input-nama"></b-form-input>
                            <b-button size="sm" variant="primary" class="ml-1"><i class="fa fa-search"></i></b-button>
                        </div>
                    </div>
                    <div class="row" style="margin-top: 20px;">
                        <div class="col-md-12">
                            <v-server-table
                                    :columns="columns"
                                    :options="optionsDataTable">
                            </v-server-table>
                        </div>
                    </div>
                </b-card-body>
            </b-card>
        </div>
    </div>
</template>

<script>
    import {API_Transaction} from "../../base_api/base_api";
    import {Event} from 'vue-tables-2';
    import datePicker from 'vue-bootstrap-datetimepicker';
    import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    import moment from 'moment';
    // const moment = require('moment');

    // import 'pc-bootstrap4-datetimepicker/build/css/bootstrap-datetimepicker.css';
    // import Multiselect from 'vue-multiselect';


    export default {
        components: {
            datePicker
        },
        data() {
            return {

                //Search
                searchInput: "",
                // config datepicker
                configTimePicker: {
                    format: 'DD/MM/YYYY',
                    showClear: true,
                    showClose: true
                },

                // config table
                columns: ['numberStore','Tanggal', 'Waktu', 'name', 'address1', 'address2','actions'],
                tableData: [],
                optionsDataTable: {
                    headings: {
                        numberStore: 'No.',
                        name: 'Warga',
                        address1: 'Judul',
                        address2: 'Pengaduan',
                        actions: 'Aksi'
                    },
                    customFilters: ['searchCustom'],
                    perPage: 10,
                    texts: {
                        count: '',
                    },
                    pagination: {
                        align: 'center',
                        nav: 'scroll',
                        chunk: 10
                    },
                    perPageValues: [],
                    sortIcon: {
                        base: 'fa',
                        up: 'fa-sort-asc',
                        down: 'fa-sort-desc',
                        is: 'fa-sort'
                    },
                    templates: {
                        numberStore: function (h, row, index) {
                            return index;
                        },
                        actions: function (h, row, index,) {
                            return (
                                <div align="center">
                                <b-button size="sm" to={'pengaduan/detail/'+ row.id} variant="primary" v-b-tooltip title="Edit"><i class="fa fa-eye"></i></b-button>
                            < /div>
                        )
                        }
                    },
                    sortable: ['billId', 'kasir', 'transactionDate', 'totalItem', 'totalAmount'],
                    clientMultiSorting: false,
                    // serverMultiSorting: true,
                    filterable: false,
                    requestFunction(data) {
                        return API_Transaction.get("localpartner", {
                            params: data
                        })
                            .catch(function (e) {
                                this.dispatch('error', e);
                            }.bind(this))
                    },
                    requestAdapter(data) {
                        // let orderBy = data.ascending == 1 ? 'asc' : 'desc';
                        // let orderColumn = data.orderBy ? data.orderBy : 'name';
                        // let sort = orderColumn + ',' + orderBy;
                        return {
                            page: data.page - 1,
                            size: 10,
                            // merchantId: data.searchCustom.merchantId,
                            // localPartnerId: data.searchCustom.localpartnerId,
                            // storeId: data.searchCustom.storeId,
                            // trxDate: data.searchCustom.date,
                            // sort: sort
                        }
                    },
                    responseAdapter(resp) {
                        // console.log('res', resp.data.data);
                        let totalemnt = resp.data.data.pages.totalElements;
                        let dataCont = resp.data.data.contents;
                        return {
                            data: dataCont,
                            count: totalemnt,
                        }
                    }
                }

            }
        },
        watch: {},
        created() {
        },
        mounted() {
        },
        methods: {
            // cariPajak() {
            //     let dataSearch = {
            //         merchantId: this.merchant
            //     }
            //     Event.$emit('vue-tables.filter::searchCustom', dataSearch);
            // },
            // formatDate(date) {
            //     return moment(date).format('DD-MM-YYYY');
            // },
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

