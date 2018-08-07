"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MidnightCovenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Midnight Covenant", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MidnightCovenant;
