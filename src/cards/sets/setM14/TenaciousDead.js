"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TenaciousDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Tenacious Dead", "Magic 2014 Core Set", "M14");
  }
}

module.exports = TenaciousDead;
