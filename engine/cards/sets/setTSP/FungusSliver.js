"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FungusSliverBase = require("../setH09/FungusSliver.js");

class FungusSliver extends FungusSliverBase {
  constructor(game) {
    super(game, "Fungus Sliver", "Time Spiral", "TSP");
  }
}

module.exports = FungusSliver;
