"use strict";
const Constants = require ("../../../Constants");
const VendettaBase = require("../setROE/Vendetta");

class Vendetta extends VendettaBase {
  constructor (game) {
    super(game, "Vendetta", "World Championship Decks 2001", "WC01");
  }
}

module.exports = Vendetta;
