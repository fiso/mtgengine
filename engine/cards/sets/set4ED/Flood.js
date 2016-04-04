"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FloodBase = require("../setBRB/Flood.js");

class Flood extends FloodBase {
  constructor(game) {
    super(game, "Flood", "Fourth Edition", "4ED");
  }
}

module.exports = Flood;
