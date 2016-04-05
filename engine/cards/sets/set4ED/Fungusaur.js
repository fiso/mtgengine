"use strict";
const Constants = require ("../../../Constants");
const FungusaurBase = require("../setCED/Fungusaur");

class Fungusaur extends FungusaurBase {
  constructor(game) {
    super(game, "Fungusaur", "Fourth Edition", "4ED");
  }
}

module.exports = Fungusaur;
