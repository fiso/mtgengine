"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadiantFountain extends UnimplementedCard {
  constructor (game) {
    super(game, "Radiant Fountain", "Iconic Masters", "IMA");
  }
}

module.exports = RadiantFountain;
