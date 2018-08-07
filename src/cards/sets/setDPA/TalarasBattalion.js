"use strict";
const Constants = require ("../../../Constants");
const TalarasBattalionBase = require("../setDDU/TalarasBattalion");

class TalarasBattalion extends TalarasBattalionBase {
  constructor (game) {
    super(game, "Talara's Battalion", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = TalarasBattalion;
