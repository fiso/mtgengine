"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TsabosWeb extends Card {
  constructor(game) {
    super(game, "Tsabo's Web", "Invasion", "INV");
  }
}

module.exports = TsabosWeb;
