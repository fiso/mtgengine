"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChillBase = require("../setpARL/Chill.js");

class Chill extends ChillBase {
  constructor(game) {
    super(game, "Chill", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Chill;
