"use strict";
const Constants = require ("../../../Constants");
const UpwellingBase = require("../setSCG/Upwelling");

class Upwelling extends UpwellingBase {
  constructor(game) {
    super(game, "Upwelling", "Tenth Edition", "10E");
  }
}

module.exports = Upwelling;
