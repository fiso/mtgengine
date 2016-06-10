"use strict";
const Constants = require ("../../../Constants");
const KrakilinBase = require("../setTMP/Krakilin");

class Krakilin extends KrakilinBase {
  constructor (game) {
    super(game, "Krakilin", "Tempest Remastered", "TPR");
  }
}

module.exports = Krakilin;
