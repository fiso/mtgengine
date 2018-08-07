"use strict";
const Constants = require ("../../../Constants");
const PlowUnderBase = require("../setWC04/PlowUnder");

class PlowUnder extends PlowUnderBase {
  constructor (game) {
    super(game, "Plow Under", "Urza's Destiny", "UDS");
  }
}

module.exports = PlowUnder;
