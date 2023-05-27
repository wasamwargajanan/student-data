<template>
    <div>
        <div>
            <v-row>
                <v-col cols="12" md="4">
                    <v-text-field label="Search by name"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field label="Search by Class"></v-text-field>
                </v-col>
                <v-col cols="12" md="4">
                    <v-text-field label="Search by Phone"></v-text-field>
                </v-col>
            </v-row>
            <div class="btn-grp d-flex justify-space-between px-4">
                <div>

                    <!-- new item dialog -->
                    
                    <v-dialog
                    v-model="dialog"
                    persistent
                    max-width="500px"
                    >
                    <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              dark              
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>

          <v-card>
            <v-card-title>enter student data</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="ID"
                            v-model="id"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="First-Name"
                            v-model="modelData.fname"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Last-Name"
                            v-model="modelData.lname"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Class"
                            v-model="modelData.class"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Phone-number"
                            v-model="modelData.pno"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Email"
                            v-model="modelData.email"
                            >

                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>

        <!-- edit dialog -->

        <v-dialog
                    v-model="dialog"
                    max-width="500px"
                    >
                    <template v-slot:activator="{ on, attrs }">
            <v-btn
              class="ml-4"
              
              @click="editSelected"
              v-bind="attrs"
              v-on="on"
            >
            edit Item
            </v-btn>
          </template>

          <v-card>
            <v-card-title>enter student data</v-card-title>
            <v-card-text>
                <v-container>
                    <v-row>
                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="ID"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="First-Name"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Last-Name"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Class"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Phone-number"
                            >

                            </v-text-field>
                        </v-col>

                        <v-col cols="12" sm="6" md="4">
                            <v-text-field
                            label="Email"
                            >

                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card-text>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>

        </v-dialog>
                   
                </div>        
            <v-btn color="error" @click="deleteSelected">delete</v-btn>
            </div>
        </div>
        {{ userId }}
        <v-data-table
        v-model="selected"
        :headers="headers"
        :items="studentData"
        :single-select="singleSelect"
        show-select
        class="elevation-1"
        >

        </v-data-table>
        {{ selected }}
    </div>
</template>

<script>
export default{
    name:'student-data-table',

    data(){
        return{
            
                id:'',
                fname:'',
                lname:'',
                class:'',
                pno:'',
                email:'',
            dialog:false,
            singleSelect:true,
            userId:'',
            selected:[],
            headers:[
                {
                    text:'id',
                    align:'start',
                    value:'id'
                },
                {text:'First-Name', value:'fname'},
                {text:'Last-Name', value:'lname'},
                {text:'Class', value:'class'},
                {text:'Phone number', value:'pno'},
                {text:'Email-id', value:'email'}

            ],
            studentData:[
                {
                    id:11,
                    fname:'Sachin',
                    lname:'Tendulkar',
                    class:12,
                    pno:9888887777,
                    email:'sachin@12.com'
                },
                {
                    id:14,
                    fname:'Virat',
                    lname:'Kolhi',
                    class:15,
                    pno:9877774444,
                    email:'virat@192.com'
                },
                {
                    id:18,
                    fname:'MS',
                    lname:'dhoni',
                    class:11,
                    pno:9866661111,
                    email:'dhoni@12.com'
                },
                {
                    id:15,
                    fname:'Rohit',
                    lname:'Sharma',
                    class:10,
                    pno:9844449999,
                    email:'rohit@12.com'
                },
                {
                    id:19,
                    fname:'Milkha',
                    lname:'Singh',
                    class:14,
                    pno:9811114444,
                    email:'milkha@12.com'
                },
                {
                    id:16,
                    fname:'Dhanraj',
                    lname:'Pille',
                    class:12,
                    pno:9899998888,
                    email:'pille@12.com'
                }
            ]
        }
    },
    methods:{
        deleteSelected(){
            for(let i = 0; i < this.studentData.length; i++){
                let txt = this.studentData[i];
                if(txt == this.selected[0]){
                    this.studentData.splice(i, 1)
                }
            }
        },
        editSelected(){
            
        },
        close(){
            this.dialog=false
        }
    }
}
</script>