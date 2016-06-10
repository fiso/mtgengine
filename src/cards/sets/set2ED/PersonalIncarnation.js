"use strict";
const Constants = require ("../../../Constants");
const PersonalIncarnationBase = require("../setCED/PersonalIncarnation");

class PersonalIncarnation extends PersonalIncarnationBase {
  constructor (game) {
    super(game, "Personal Incarnation", "Unlimited Edition", "2ED");
  }
}

module.exports = PersonalIncarnation;
