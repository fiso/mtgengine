"use strict";
const Constants = require ("../../../Constants");
const JovensFerretsBase = require("../setHML/JovensFerrets");

class JovensFerrets extends JovensFerretsBase {
  constructor(game) {
    super(game, "Joven's Ferrets", "Masters Edition II", "ME2");
  }
}

module.exports = JovensFerrets;
