"use strict";
const Constants = require ("../../../Constants");
const ForceSpikeBase = require("../setDDJ/ForceSpike");

class ForceSpike extends ForceSpikeBase {
  constructor (game) {
    super(game, "Force Spike", "World Championship Decks 1998", "WC98");
  }
}

module.exports = ForceSpike;
