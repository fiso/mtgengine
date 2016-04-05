"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadiantFountain extends UnimplementedCard {
  constructor(game) {
    super(game, "Radiant Fountain", "Magic 2015 Core Set", "M15");
  }
}

module.exports = RadiantFountain;
