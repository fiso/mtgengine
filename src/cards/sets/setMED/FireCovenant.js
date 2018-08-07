"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireCovenant extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Covenant", "Masters Edition", "MED");
  }
}

module.exports = FireCovenant;
