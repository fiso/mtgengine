"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OvertOperative extends UnimplementedCard {
  constructor (game) {
    super(game, "Overt Operative", "Unstable", "UST");
  }
}

module.exports = OvertOperative;
