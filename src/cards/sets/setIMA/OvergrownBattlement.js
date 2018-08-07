"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OvergrownBattlement extends UnimplementedCard {
  constructor (game) {
    super(game, "Overgrown Battlement", "Iconic Masters", "IMA");
  }
}

module.exports = OvergrownBattlement;
