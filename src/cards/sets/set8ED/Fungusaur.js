"use strict";
const Constants = require ("../../../Constants");
const FungusaurBase = require("../setCED/Fungusaur");

class Fungusaur extends FungusaurBase {
  constructor(game) {
    super(game, "Fungusaur", "Eighth Edition", "8ED");
  }
}

module.exports = Fungusaur;
