"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KrakilinBase = require("../setTMP/Krakilin.js");

class Krakilin extends KrakilinBase {
  constructor(game) {
    super(game, "Krakilin", "Tempest Remastered", "TPR");
  }
}

module.exports = Krakilin;
