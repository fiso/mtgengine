"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RathiTrapper extends Card {
  constructor(game) {
    super(game, "Rathi Trapper", "Modern Masters", "MMA");
  }
}

module.exports = RathiTrapper;
