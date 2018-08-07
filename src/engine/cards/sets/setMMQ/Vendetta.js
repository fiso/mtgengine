"use strict";
const Constants = require ("../../../Constants");
const VendettaBase = require("../setROE/Vendetta");

class Vendetta extends VendettaBase {
  constructor (game) {
    super(game, "Vendetta", "Mercadian Masques", "MMQ");
  }
}

module.exports = Vendetta;
