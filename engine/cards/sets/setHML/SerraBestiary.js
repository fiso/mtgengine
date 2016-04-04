"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SerraBestiaryBase = require("../set5ED/SerraBestiary.js");

class SerraBestiary extends SerraBestiaryBase {
  constructor(game) {
    super(game, "Serra Bestiary", "Homelands", "HML");
  }
}

module.exports = SerraBestiary;
