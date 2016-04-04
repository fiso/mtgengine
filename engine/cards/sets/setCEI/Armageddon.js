"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmageddonBase = require("../setATH/Armageddon.js");

class Armageddon extends ArmageddonBase {
  constructor(game) {
    super(game, "Armageddon", "International Collector's Edition", "CEI");
  }
}

module.exports = Armageddon;
