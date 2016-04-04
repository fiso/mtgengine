"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArmoredTransport extends Card {
  constructor(game) {
    super(game, "Armored Transport", "Gatecrash", "GTC");
  }
}

module.exports = ArmoredTransport;
