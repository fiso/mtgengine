"use strict";
const Constants = require ("../../../Constants");
const JaceArchitectofThoughtBase = require("../setDDM/JaceArchitectofThought");

class JaceArchitectofThought extends JaceArchitectofThoughtBase {
  constructor (game) {
    super(game, "Jace, Architect of Thought", "Return to Ravnica", "RTR");
  }
}

module.exports = JaceArchitectofThought;
