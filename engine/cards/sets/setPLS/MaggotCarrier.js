"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MaggotCarrierBase = require("../set8ED/MaggotCarrier.js");

class MaggotCarrier extends MaggotCarrierBase {
  constructor(game) {
    super(game, "Maggot Carrier", "Planeshift", "PLS");
  }
}

module.exports = MaggotCarrier;
