"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GrinningTotemBase = require("../set6ED/GrinningTotem.js");

class GrinningTotem extends GrinningTotemBase {
  constructor(game) {
    super(game, "Grinning Totem", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = GrinningTotem;
