"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PersonalTutor extends Card {
  constructor(game) {
    super(game, "Personal Tutor", "Masters Edition II", "ME2");
  }
}

module.exports = PersonalTutor;
