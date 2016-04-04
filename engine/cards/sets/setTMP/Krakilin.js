"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Krakilin extends Card {
  constructor(game) {
    super(game, "Krakilin", "Tempest", "TMP");
  }
}

module.exports = Krakilin;
