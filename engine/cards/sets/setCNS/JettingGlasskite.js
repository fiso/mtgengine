"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JettingGlasskiteBase = require("../setBOK/JettingGlasskite.js");

class JettingGlasskite extends JettingGlasskiteBase {
  constructor(game) {
    super(game, "Jetting Glasskite", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = JettingGlasskite;
