"use strict";
const Constants = require ("../../../Constants");
const FlayingTendrilsBase = require("../setOGW/FlayingTendrils");

class FlayingTendrils extends FlayingTendrilsBase {
  constructor (game) {
    super(game, "Flaying Tendrils", "Friday Night Magic 2016", "F16");
  }
}

module.exports = FlayingTendrils;
