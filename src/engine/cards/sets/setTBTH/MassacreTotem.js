"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MassacreTotem extends UnimplementedCard {
  constructor (game) {
    super(game, "Massacre Totem", "Battle the Horde", "TBTH");
  }
}

module.exports = MassacreTotem;
