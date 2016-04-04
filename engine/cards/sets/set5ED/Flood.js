"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FloodBase = require("../setBRB/Flood.js");

class Flood extends FloodBase {
  constructor(game) {
    super(game, "Flood", "Fifth Edition", "5ED");
  }
}

module.exports = Flood;
