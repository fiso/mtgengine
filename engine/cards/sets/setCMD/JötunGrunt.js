"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JötunGruntBase = require("../setCSP/JötunGrunt.js");

class JötunGrunt extends JötunGruntBase {
  constructor(game) {
    super(game, "Jötun Grunt", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = JötunGrunt;
