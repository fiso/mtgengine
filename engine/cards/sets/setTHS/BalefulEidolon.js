"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalefulEidolon extends Card {
  constructor(game) {
    super(game, "Baleful Eidolon", "Theros", "THS");
  }
}

module.exports = BalefulEidolon;
