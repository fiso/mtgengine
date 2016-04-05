"use strict";
const Constants = require ("../../../Constants");
const FungusaurBase = require("../setCED/Fungusaur");

class Fungusaur extends FungusaurBase {
  constructor(game) {
    super(game, "Fungusaur", "Limited Edition Beta", "LEB");
  }
}

module.exports = Fungusaur;
