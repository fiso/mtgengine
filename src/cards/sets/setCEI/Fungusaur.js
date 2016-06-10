"use strict";
const Constants = require ("../../../Constants");
const FungusaurBase = require("../setCED/Fungusaur");

class Fungusaur extends FungusaurBase {
  constructor (game) {
    super(game, "Fungusaur", "International Collector's Edition", "CEI");
  }
}

module.exports = Fungusaur;
