"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FungusaurBase = require("../setCED/Fungusaur.js");

class Fungusaur extends FungusaurBase {
  constructor(game) {
    super(game, "Fungusaur", "Fourth Edition", "4ED");
  }
}

module.exports = Fungusaur;
