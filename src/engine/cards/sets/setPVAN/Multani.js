"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Multani extends UnimplementedCard {
  constructor (game) {
    super(game, "Multani", "Vanguard Series", "PVAN");
  }
}

module.exports = Multani;
