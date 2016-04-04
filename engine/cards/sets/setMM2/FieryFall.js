"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieryFallBase = require("../setCON/FieryFall.js");

class FieryFall extends FieryFallBase {
  constructor(game) {
    super(game, "Fiery Fall", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = FieryFall;
