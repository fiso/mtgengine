"use strict";
const Constants = require ("../../../Constants");
const MaggotCarrierBase = require("../set8ED/MaggotCarrier");

class MaggotCarrier extends MaggotCarrierBase {
  constructor (game) {
    super(game, "Maggot Carrier", "Planeshift", "PLS");
  }
}

module.exports = MaggotCarrier;
