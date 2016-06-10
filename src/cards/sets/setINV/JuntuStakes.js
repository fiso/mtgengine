"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JuntuStakes extends UnimplementedCard {
  constructor (game) {
    super(game, "Juntu Stakes", "Invasion", "INV");
  }
}

module.exports = JuntuStakes;
