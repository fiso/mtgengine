"use strict";
const Constants = require ("../../../Constants");
const DarksteelJuggernautBase = require("../setC18/DarksteelJuggernaut");

class DarksteelJuggernaut extends DarksteelJuggernautBase {
  constructor (game) {
    super(game, "Darksteel Juggernaut", "Scars of Mirrodin", "SOM");
  }
}

module.exports = DarksteelJuggernaut;
