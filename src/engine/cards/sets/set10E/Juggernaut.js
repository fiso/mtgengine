"use strict";
const Constants = require ("../../../Constants");
const JuggernautBase = require("../setBBD/Juggernaut");

class Juggernaut extends JuggernautBase {
  constructor (game) {
    super(game, "Juggernaut", "Tenth Edition", "10E");
  }
}

module.exports = Juggernaut;
