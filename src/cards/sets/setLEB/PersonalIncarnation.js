"use strict";
const Constants = require ("../../../Constants");
const PersonalIncarnationBase = require("../setCED/PersonalIncarnation");

class PersonalIncarnation extends PersonalIncarnationBase {
  constructor(game) {
    super(game, "Personal Incarnation", "Limited Edition Beta", "LEB");
  }
}

module.exports = PersonalIncarnation;
