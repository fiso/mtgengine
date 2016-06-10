"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KodamasReach extends UnimplementedCard {
  constructor (game) {
    super(game, "Kodama's Reach", "Champions of Kamigawa", "CHK");
  }
}

module.exports = KodamasReach;
