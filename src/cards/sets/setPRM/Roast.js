"use strict";
const Constants = require ("../../../Constants");
const RoastBase = require("../setDTK/Roast");

class Roast extends RoastBase {
  constructor (game) {
    super(game, "Roast", "Magic Online Promos", "PRM");
  }
}

module.exports = Roast;
