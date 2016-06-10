"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PersonalTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Personal Tutor", "Masters Edition II", "ME2");
  }
}

module.exports = PersonalTutor;
