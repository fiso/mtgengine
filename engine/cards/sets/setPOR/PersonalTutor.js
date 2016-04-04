"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PersonalTutorBase = require("../setME2/PersonalTutor.js");

class PersonalTutor extends PersonalTutorBase {
  constructor(game) {
    super(game, "Personal Tutor", "Portal", "POR");
  }
}

module.exports = PersonalTutor;
