"use strict";
const Constants = require ("../../../Constants");
const EsperzoaBase = require("../setMMA/Esperzoa");

class Esperzoa extends EsperzoaBase {
  constructor (game) {
    super(game, "Esperzoa", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = Esperzoa;
