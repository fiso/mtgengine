"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastbreakerofBalaGedBase = require("../setDDP/BeastbreakerofBalaGed.js");

class BeastbreakerofBalaGed extends BeastbreakerofBalaGedBase {
  constructor(game) {
    super(game, "Beastbreaker of Bala Ged", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = BeastbreakerofBalaGed;
