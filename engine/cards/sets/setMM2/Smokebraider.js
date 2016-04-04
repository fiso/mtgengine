"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SmokebraiderBase = require("../setLRW/Smokebraider.js");

class Smokebraider extends SmokebraiderBase {
  constructor(game) {
    super(game, "Smokebraider", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = Smokebraider;
