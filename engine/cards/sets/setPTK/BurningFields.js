"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BurningFields extends Card {
  constructor(game) {
    super(game, "Burning Fields", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BurningFields;
