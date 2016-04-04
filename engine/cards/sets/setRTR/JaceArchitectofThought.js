"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JaceArchitectofThoughtBase = require("../setDDM/JaceArchitectofThought.js");

class JaceArchitectofThought extends JaceArchitectofThoughtBase {
  constructor(game) {
    super(game, "Jace, Architect of Thought", "Return to Ravnica", "RTR");
  }
}

module.exports = JaceArchitectofThought;
