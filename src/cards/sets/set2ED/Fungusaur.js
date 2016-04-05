"use strict";
const Constants = require ("../../../Constants");
const FungusaurBase = require("../setCED/Fungusaur");

class Fungusaur extends FungusaurBase {
  constructor(game) {
    super(game, "Fungusaur", "Unlimited Edition", "2ED");
  }
}

module.exports = Fungusaur;
