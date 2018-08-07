"use strict";
const Constants = require ("../../../Constants");
const JovensFerretsBase = require("../setME2/JovensFerrets");

class JovensFerrets extends JovensFerretsBase {
  constructor (game) {
    super(game, "Joven's Ferrets", "Homelands", "HML");
  }
}

module.exports = JovensFerrets;
