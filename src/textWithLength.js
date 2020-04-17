export const textWithLength = {
  data() {
    return {
      text: "Some crazy text",
    };
  },
  computed: {
    textWithLength() {
      return `${this.text} (${this.text.length})`;
    },
  },
};
