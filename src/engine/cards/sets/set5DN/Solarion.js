"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Solarion extends UnimplementedCard {
  constructor (game) {
    super(game, "Solarion", "Fifth Dawn", "5DN");
  }
}

module.exports = Solarion;
