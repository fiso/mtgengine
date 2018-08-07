"use strict";
const Constants = require ("../../../Constants");
const JuggernautBase = require("../setBBD/Juggernaut");

class Juggernaut extends JuggernautBase {
  constructor (game) {
    super(game, "Juggernaut", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = Juggernaut;
