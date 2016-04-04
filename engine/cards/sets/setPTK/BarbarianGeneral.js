"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BarbarianGeneral extends Card {
  constructor(game) {
    super(game, "Barbarian General", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BarbarianGeneral;
