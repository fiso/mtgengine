"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DampenThoughtBase = require("../setCHK/DampenThought.js");

class DampenThought extends DampenThoughtBase {
  constructor(game) {
    super(game, "Dampen Thought", "Modern Masters", "MMA");
  }
}

module.exports = DampenThought;
