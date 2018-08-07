"use strict";
const Constants = require ("../../../Constants");
const GainsayBase = require("../setTHS/Gainsay");

class Gainsay extends GainsayBase {
  constructor (game) {
    super(game, "Gainsay", "Planeshift", "PLS");
  }
}

module.exports = Gainsay;
