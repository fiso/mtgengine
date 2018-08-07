"use strict";
const Constants = require ("../../../Constants");
const PlowUnderBase = require("../setWC04/PlowUnder");

class PlowUnder extends PlowUnderBase {
  constructor (game) {
    super(game, "Plow Under", "World Championship Decks 2000", "WC00");
  }
}

module.exports = PlowUnder;
