"use strict";
const Constants = require ("../../../Constants");
const PersonalIncarnationBase = require("../setME4/PersonalIncarnation");

class PersonalIncarnation extends PersonalIncarnationBase {
  constructor (game) {
    super(game, "Personal Incarnation", "Fourth Edition", "4ED");
  }
}

module.exports = PersonalIncarnation;
