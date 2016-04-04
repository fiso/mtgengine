"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeathforgeShamanBase = require("../setCNS/DeathforgeShaman.js");

class DeathforgeShaman extends DeathforgeShamanBase {
  constructor(game) {
    super(game, "Deathforge Shaman", "Worldwake", "WWK");
  }
}

module.exports = DeathforgeShaman;
