"use strict";
const Constants = require ("../../../Constants");
const JuggernautBase = require("../setBBD/Juggernaut");

class Juggernaut extends JuggernautBase {
  constructor (game) {
    super(game, "Juggernaut", "Magic 2015", "M15");
  }
}

module.exports = Juggernaut;
