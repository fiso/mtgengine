"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GainsayBase = require("../setPLS/Gainsay.js");

class Gainsay extends GainsayBase {
  constructor(game) {
    super(game, "Gainsay", "Theros", "THS");
  }
}

module.exports = Gainsay;
