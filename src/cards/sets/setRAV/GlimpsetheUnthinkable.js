"use strict";
const Constants = require ("../../../Constants");
const GlimpsetheUnthinkableBase = require("../setIMA/GlimpsetheUnthinkable");

class GlimpsetheUnthinkable extends GlimpsetheUnthinkableBase {
  constructor (game) {
    super(game, "Glimpse the Unthinkable", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GlimpsetheUnthinkable;
