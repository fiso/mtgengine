"use strict";
const Constants = require ("../../../Constants");
const EternalDragonBase = require("../setVMA/EternalDragon");

class EternalDragon extends EternalDragonBase {
  constructor (game) {
    super(game, "Eternal Dragon", "World Championship Decks 2004", "WC04");
  }
}

module.exports = EternalDragon;
