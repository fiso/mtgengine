"use strict";
const Constants = require ("../../../Constants");
const DampenThoughtBase = require("../setCHK/DampenThought");

class DampenThought extends DampenThoughtBase {
  constructor (game) {
    super(game, "Dampen Thought", "Modern Masters", "MMA");
  }
}

module.exports = DampenThought;
