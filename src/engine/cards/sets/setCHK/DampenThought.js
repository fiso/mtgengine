"use strict";
const Constants = require ("../../../Constants");
const DampenThoughtBase = require("../setMMA/DampenThought");

class DampenThought extends DampenThoughtBase {
  constructor (game) {
    super(game, "Dampen Thought", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DampenThought;
