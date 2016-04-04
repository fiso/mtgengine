"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathbringerRegentBase = require("../setDTK/DeathbringerRegent.js");

class DeathbringerRegent extends DeathbringerRegentBase {
  constructor(game) {
    super(game, "Deathbringer Regent", "Launch Parties", "pLPA");
  }
}

module.exports = DeathbringerRegent;
