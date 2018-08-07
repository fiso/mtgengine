"use strict";
const Constants = require ("../../../Constants");
const PlowUnderBase = require("../setWC04/PlowUnder");

class PlowUnder extends PlowUnderBase {
  constructor (game) {
    super(game, "Plow Under", "Eighth Edition", "8ED");
  }
}

module.exports = PlowUnder;
