"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EnthrallingVictor extends Card {
  constructor(game) {
    super(game, "Enthralling Victor", "Magic Origins", "ORI");
  }
}

module.exports = EnthrallingVictor;
