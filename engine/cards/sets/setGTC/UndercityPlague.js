"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class UndercityPlague extends Card {
  constructor(game) {
    super(game, "Undercity Plague", "Gatecrash", "GTC");
  }
}

module.exports = UndercityPlague;
