"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KamioftheHonoredDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Kami of the Honored Dead", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = KamioftheHonoredDead;
