const LiteratureFull = {
  "type": "object",
  "description": "Full literature, returned when queried using UID",
  "properties": {
    "uid": {
      "type": "string",
      "description": "Literature unique ID"
    },
    "title": {
      "type": "string",
      "description": "Literature title"
    },
    "earthlyOrigin": {
      "type": "boolean",
      "description": "Whether it's of earthly origin"
    },
    "shakespeareanWork": {
      "type": "boolean",
      "description": "Whether it's a Shakespearean work"
    },
    "report": {
      "type": "boolean",
      "description": "Whether it's a report"
    },
    "scientificLiterature": {
      "type": "boolean",
      "description": "Whether it's a scientific literature"
    },
    "technicalManual": {
      "type": "boolean",
      "description": "Whether it's a technical manual"
    },
    "religiousLiterature": {
      "type": "boolean",
      "description": "Whether it's a religious literature"
    }
  },
  "required": [
    "uid",
    "title"
  ],
  "title": "LiteratureFull",
  "x-readme-ref-name": "LiteratureFull"
} as const;
export default LiteratureFull
