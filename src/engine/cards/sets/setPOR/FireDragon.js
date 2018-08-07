"use strict";
const Constants = require ("../../../Constants");
const FireDragonBase = require("../setME2/FireDragon");

class FireDragon extends FireDragonBase {
  constructor (game) {
    super(game, "Fire Dragon", "Portal", "POR");
  }
}

module.exports = FireDragon;
