"use strict";
const Constants = require ("../../../Constants");
const EldraziSpawnBase = require("../setTC17/EldraziSpawn");

class EldraziSpawn extends EldraziSpawnBase {
  constructor (game) {
    super(game, "Eldrazi Spawn", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = EldraziSpawn;
