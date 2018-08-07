"use strict";
const Constants = require ("../../../Constants");
const AdornedPouncerBase = require("../setHOU/AdornedPouncer");

class AdornedPouncer extends AdornedPouncerBase {
  constructor (game) {
    super(game, "Adorned Pouncer", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = AdornedPouncer;
