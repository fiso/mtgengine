"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FearBase = require("../set6ED/Fear.js");

class Fear extends FearBase {
  constructor(game) {
    super(game, "Fear", "Seventh Edition", "7ED");
  }
}

module.exports = Fear;
