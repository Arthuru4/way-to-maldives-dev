<dropdown
  :options="arrayOfObjects"
  :selected="object"
  v-on:updateOption="methodToRunOnSelect"
></dropdown>

<script>
import dropdown from 'vue-dropdowns';

export default {
  data() {
    return {
      arrayOfObjects: [],
      object: {
        name: 'Object Name'
      }
    };
  },

  components: {
    dropdown: dropdown
  },

  methods: {
    methodToRunOnSelect(payload) {
      this.object = payload;
    }
  }
};
</script>
