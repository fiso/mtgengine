"use strict";
const Constants = require ("../../../Constants");
const OblivionSowerBase = require("../setBFZ/OblivionSower");

class OblivionSower extends OblivionSowerBase {
  constructor(game) {
    super(game, "Oblivion Sower", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = OblivionSower;
