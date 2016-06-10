"use strict";
const Constants = require ("../../../Constants");
const PersonalTutorBase = require("../setME2/PersonalTutor");

class PersonalTutor extends PersonalTutorBase {
  constructor (game) {
    super(game, "Personal Tutor", "Portal", "POR");
  }
}

module.exports = PersonalTutor;
