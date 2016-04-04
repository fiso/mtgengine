"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernalTutor extends Card {
  constructor(game) {
    super(game, "Infernal Tutor", "Dissension", "DIS");
  }
}

module.exports = InfernalTutor;
