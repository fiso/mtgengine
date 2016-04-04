"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StoneGiantBase = require("../setCED/StoneGiant.js");

class StoneGiant extends StoneGiantBase {
  constructor(game) {
    super(game, "Stone Giant", "International Collector's Edition", "CEI");
  }
}

module.exports = StoneGiant;
