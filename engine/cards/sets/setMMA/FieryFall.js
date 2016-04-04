"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryFallBase = require("../setCON/FieryFall.js");

class FieryFall extends FieryFallBase {
  constructor(game) {
    super(game, "Fiery Fall", "Modern Masters", "MMA");
  }
}

module.exports = FieryFall;
