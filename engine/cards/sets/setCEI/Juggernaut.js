"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JuggernautBase = require("../setARC/Juggernaut.js");

class Juggernaut extends JuggernautBase {
  constructor(game) {
    super(game, "Juggernaut", "International Collector's Edition", "CEI");
  }
}

module.exports = Juggernaut;
