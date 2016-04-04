"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlowUnderBase = require("../set8ED/PlowUnder.js");

class PlowUnder extends PlowUnderBase {
  constructor(game) {
    super(game, "Plow Under", "Urza's Destiny", "UDS");
  }
}

module.exports = PlowUnder;
