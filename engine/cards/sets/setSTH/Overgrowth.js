"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OvergrowthBase = require("../set9ED/Overgrowth.js");

class Overgrowth extends OvergrowthBase {
  constructor(game) {
    super(game, "Overgrowth", "Stronghold", "STH");
  }
}

module.exports = Overgrowth;
