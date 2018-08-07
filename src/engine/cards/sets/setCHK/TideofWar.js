"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TideofWar extends UnimplementedCard {
  constructor (game) {
    super(game, "Tide of War", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TideofWar;
