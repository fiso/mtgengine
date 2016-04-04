"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JovensFerretsBase = require("../setHML/JovensFerrets.js");

class JovensFerrets extends JovensFerretsBase {
  constructor(game) {
    super(game, "Joven's Ferrets", "Masters Edition II", "ME2");
  }
}

module.exports = JovensFerrets;
