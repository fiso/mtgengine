"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WuInfantry extends Card {
  constructor(game) {
    super(game, "Wu Infantry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuInfantry;
