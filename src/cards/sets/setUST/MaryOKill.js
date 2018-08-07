"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaryOKill extends UnimplementedCard {
  constructor (game) {
    super(game, "Mary O'Kill", "Unstable", "UST");
  }
}

module.exports = MaryOKill;
