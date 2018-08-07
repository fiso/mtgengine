"use strict";
const Constants = require ("../../../Constants");
const EternalDragonBase = require("../setVMA/EternalDragon");

class EternalDragon extends EternalDragonBase {
  constructor (game) {
    super(game, "Eternal Dragon", "Magic Online Promos", "PRM");
  }
}

module.exports = EternalDragon;
