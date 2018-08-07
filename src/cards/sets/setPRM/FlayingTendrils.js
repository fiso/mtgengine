"use strict";
const Constants = require ("../../../Constants");
const FlayingTendrilsBase = require("../setOGW/FlayingTendrils");

class FlayingTendrils extends FlayingTendrilsBase {
  constructor (game) {
    super(game, "Flaying Tendrils", "Magic Online Promos", "PRM");
  }
}

module.exports = FlayingTendrils;
