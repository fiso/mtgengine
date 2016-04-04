"use strict";
const Constants = require ("../../../Constants");
const PlowUnderBase = require("../set8ED/PlowUnder");

class PlowUnder extends PlowUnderBase {
  constructor(game) {
    super(game, "Plow Under", "Urza's Destiny", "UDS");
  }
}

module.exports = PlowUnder;
