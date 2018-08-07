"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScavengerFolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Scavenger Folk", "Masters Edition IV", "ME4");
  }
}

module.exports = ScavengerFolk;
