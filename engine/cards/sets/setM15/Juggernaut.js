"use strict";
const Constants = require ("../../../Constants");
const JuggernautBase = require("../setARC/Juggernaut");

class Juggernaut extends JuggernautBase {
  constructor(game) {
    super(game, "Juggernaut", "Magic 2015 Core Set", "M15");
  }
}

module.exports = Juggernaut;
