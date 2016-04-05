"use strict";
const Constants = require ("../../../Constants");
const DeathforgeShamanBase = require("../setCNS/DeathforgeShaman");

class DeathforgeShaman extends DeathforgeShamanBase {
  constructor(game) {
    super(game, "Deathforge Shaman", "Worldwake", "WWK");
  }
}

module.exports = DeathforgeShaman;
