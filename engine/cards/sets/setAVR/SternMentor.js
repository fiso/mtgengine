"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SternMentor extends Card {
  constructor(game) {
    super(game, "Stern Mentor", "Avacyn Restored", "AVR");
  }
}

module.exports = SternMentor;
