"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BontusLastReckoning extends UnimplementedCard {
  constructor (game) {
    super(game, "Bontu's Last Reckoning", "Hour of Devastation", "HOU");
  }
}

module.exports = BontusLastReckoning;
