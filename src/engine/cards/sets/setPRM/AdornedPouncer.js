"use strict";
const Constants = require ("../../../Constants");
const AdornedPouncerBase = require("../setHOU/AdornedPouncer");

class AdornedPouncer extends AdornedPouncerBase {
  constructor (game) {
    super(game, "Adorned Pouncer", "Magic Online Promos", "PRM");
  }
}

module.exports = AdornedPouncer;
