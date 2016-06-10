"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TsabosDecree extends UnimplementedCard {
  constructor (game) {
    super(game, "Tsabo's Decree", "Invasion", "INV");
  }
}

module.exports = TsabosDecree;
