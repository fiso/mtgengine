"use strict";
const Constants = require ("../../../Constants");
const KnightoftheReliquaryBase = require("../setIMA/KnightoftheReliquary");

class KnightoftheReliquary extends KnightoftheReliquaryBase {
  constructor (game) {
    super(game, "Knight of the Reliquary", "Conflux", "CON");
  }
}

module.exports = KnightoftheReliquary;
