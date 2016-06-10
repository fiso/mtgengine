"use strict";
const Constants = require ("../../../Constants");
const FungusaurBase = require("../setCED/Fungusaur");

class Fungusaur extends FungusaurBase {
  constructor (game) {
    super(game, "Fungusaur", "Fifth Edition", "5ED");
  }
}

module.exports = Fungusaur;
