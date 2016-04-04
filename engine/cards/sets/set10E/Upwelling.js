"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const UpwellingBase = require("../setSCG/Upwelling.js");

class Upwelling extends UpwellingBase {
  constructor(game) {
    super(game, "Upwelling", "Tenth Edition", "10E");
  }
}

module.exports = Upwelling;
