"use strict";
const Constants = require ("../../../Constants");
const VendettaBase = require("../setMMQ/Vendetta");

class Vendetta extends VendettaBase {
  constructor (game) {
    super(game, "Vendetta", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = Vendetta;
