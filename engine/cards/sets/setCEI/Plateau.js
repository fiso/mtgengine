"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlateauBase = require("../setCED/Plateau.js");

class Plateau extends PlateauBase {
  constructor(game) {
    super(game, "Plateau", "International Collector's Edition", "CEI");
  }
}

module.exports = Plateau;
