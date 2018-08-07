"use strict";
const Constants = require ("../../../Constants");
const KrakilinBase = require("../setTPR/Krakilin");

class Krakilin extends KrakilinBase {
  constructor (game) {
    super(game, "Krakilin", "Tempest", "TMP");
  }
}

module.exports = Krakilin;
