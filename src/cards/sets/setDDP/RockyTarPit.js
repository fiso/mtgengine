"use strict";
const Constants = require ("../../../Constants");
const RockyTarPitBase = require("../setC18/RockyTarPit");

class RockyTarPit extends RockyTarPitBase {
  constructor (game) {
    super(game, "Rocky Tar Pit", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = RockyTarPit;
