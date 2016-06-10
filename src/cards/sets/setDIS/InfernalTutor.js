"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InfernalTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Infernal Tutor", "Dissension", "DIS");
  }
}

module.exports = InfernalTutor;
