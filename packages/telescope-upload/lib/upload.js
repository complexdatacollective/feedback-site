Settings.addField([
  {
    fieldName: 'cloudinaryCloudName',
    fieldSchema: {
      type: String,
      optional: true,
      autoform: {
        group: 'cloudinary'
      }
    }
  },
  {
    fieldName: 'cloudinaryAPIKey',
    fieldSchema: {
      type: String,
      optional: true,
      private: true,
      autoform: {
        group: 'cloudinary'
      }
    }
  },
  {
    fieldName: 'cloudinaryAPISecret',
    fieldSchema: {
      type: String,
      optional: true,
      private: true,
      autoform: {
        group: 'cloudinary'
      }
    }
  }
]);