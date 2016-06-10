"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Sentinel", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelSentinel;
