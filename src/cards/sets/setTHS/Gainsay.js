"use strict";
const Constants = require ("../../../Constants");
const GainsayBase = require("../setPLS/Gainsay");

class Gainsay extends GainsayBase {
  constructor (game) {
    super(game, "Gainsay", "Theros", "THS");
  }
}

module.exports = Gainsay;
