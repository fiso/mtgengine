"use strict";
const Constants = require ("../../../Constants");
const AetherGaleBase = require("../setC18/AetherGale");

class AetherGale extends AetherGaleBase {
  constructor (game) {
    super(game, "Aether Gale", "Explorers of Ixalan", "E02");
  }
}

module.exports = AetherGale;
