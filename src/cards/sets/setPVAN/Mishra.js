"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mishra extends UnimplementedCard {
  constructor (game) {
    super(game, "Mishra", "Vanguard Series", "PVAN");
  }
}

module.exports = Mishra;
