"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FungusaurBase = require("../setCED/Fungusaur.js");

class Fungusaur extends FungusaurBase {
  constructor(game) {
    super(game, "Fungusaur", "Limited Edition Beta", "LEB");
  }
}

module.exports = Fungusaur;
