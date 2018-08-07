"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RampagingHippo extends UnimplementedCard {
  constructor (game) {
    super(game, "Rampaging Hippo", "Hour of Devastation", "HOU");
  }
}

module.exports = RampagingHippo;
