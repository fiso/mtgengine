"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SorceressQueenBase = require("../setARN/SorceressQueen.js");

class SorceressQueen extends SorceressQueenBase {
  constructor(game) {
    super(game, "Sorceress Queen", "Fourth Edition", "4ED");
  }
}

module.exports = SorceressQueen;
