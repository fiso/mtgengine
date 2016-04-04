"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DromartheBanisher extends Card {
  constructor(game) {
    super(game, "Dromar, the Banisher", "Invasion", "INV");
  }
}

module.exports = DromartheBanisher;
