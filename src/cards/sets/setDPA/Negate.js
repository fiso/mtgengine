"use strict";
const Constants = require ("../../../Constants");
const NegateBase = require("../setSS1/Negate");

class Negate extends NegateBase {
  constructor (game) {
    super(game, "Negate", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = Negate;
