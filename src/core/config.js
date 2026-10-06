export default {
  "id": 20,
  "title": "Referral Introduction",
  "framework": "Express",
  "transport": "api",
  "details": [],
  "projects": [],
  "actions": [],
  "capacity": 0,
  "adminOnly": true,
  "hideForm": false,
  "publicList": false,
  "formNote": "Your details are used only to handle this request.",
  "kind": "introduction",
  "eyebrow": "A USEFUL CONNECTION",
  "headline": "Bring two good people together.",
  "description": "Introduce two people who have agreed to be connected. Each receives the same context and contact details.",
  "button": "Send introduction",
  "fields": [
    {
      "name": "name",
      "label": "First person\u2019s name",
      "type": "text"
    },
    {
      "name": "email",
      "label": "First person\u2019s email",
      "type": "email"
    },
    {
      "name": "second_name",
      "label": "Second person\u2019s name",
      "type": "text"
    },
    {
      "name": "second_email",
      "label": "Second person\u2019s email",
      "type": "email"
    },
    {
      "name": "message",
      "label": "Why are you introducing them?",
      "type": "textarea"
    },
    {
      "name": "consent",
      "label": "Both people have agreed to this introduction",
      "type": "checkbox"
    }
  ],
  "success": "The introduction is saved.",
  "accent": "#216451",
  "batch": true
};
