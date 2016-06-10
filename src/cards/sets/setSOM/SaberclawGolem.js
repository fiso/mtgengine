"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaberclawGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Saberclaw Golem", "Scars of Mirrodin", "SOM");
  }
}

module.exports = SaberclawGolem;
