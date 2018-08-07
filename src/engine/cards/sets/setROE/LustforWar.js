"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LustforWar extends UnimplementedCard {
  constructor (game) {
    super(game, "Lust for War", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LustforWar;
