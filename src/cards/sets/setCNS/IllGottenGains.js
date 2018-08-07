"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllGottenGains extends UnimplementedCard {
  constructor (game) {
    super(game, "Ill-Gotten Gains", "Conspiracy", "CNS");
  }
}

module.exports = IllGottenGains;
