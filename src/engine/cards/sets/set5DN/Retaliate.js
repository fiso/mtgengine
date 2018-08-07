"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Retaliate extends UnimplementedCard {
  constructor (game) {
    super(game, "Retaliate", "Fifth Dawn", "5DN");
  }
}

module.exports = Retaliate;
