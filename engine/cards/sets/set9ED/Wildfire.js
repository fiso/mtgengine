"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WildfireBase = require("../setMM2/Wildfire.js");

class Wildfire extends WildfireBase {
  constructor(game) {
    super(game, "Wildfire", "Ninth Edition", "9ED");
  }
}

module.exports = Wildfire;
