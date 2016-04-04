"use strict";
const Constants = require ("../../../Constants");
const DeathbringerRegentBase = require("../setDTK/DeathbringerRegent");

class DeathbringerRegent extends DeathbringerRegentBase {
  constructor(game) {
    super(game, "Deathbringer Regent", "Launch Parties", "pLPA");
  }
}

module.exports = DeathbringerRegent;
