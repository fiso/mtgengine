"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JuggernautBase = require("../setARC/Juggernaut.js");

class Juggernaut extends JuggernautBase {
  constructor(game) {
    super(game, "Juggernaut", "Masters Edition IV", "ME4");
  }
}

module.exports = Juggernaut;
