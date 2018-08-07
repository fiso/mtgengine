"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OvergrownTomb extends UnimplementedCard {
  constructor (game) {
    super(game, "Overgrown Tomb", "Zendikar Expeditions", "EXP");
  }
}

module.exports = OvergrownTomb;
