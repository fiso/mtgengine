"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TsabosWeb extends UnimplementedCard {
  constructor (game) {
    super(game, "Tsabo's Web", "Invasion", "INV");
  }
}

module.exports = TsabosWeb;
