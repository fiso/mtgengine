"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryFallBase = require("../setCON/FieryFall.js");

class FieryFall extends FieryFallBase {
  constructor(game) {
    super(game, "Fiery Fall", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = FieryFall;
