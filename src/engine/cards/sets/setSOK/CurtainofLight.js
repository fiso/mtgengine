"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurtainofLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Curtain of Light", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = CurtainofLight;
