"use strict";
const Constants = require ("../../../Constants");
const KrosanVorineBase = require("../setVMA/KrosanVorine");

class KrosanVorine extends KrosanVorineBase {
  constructor (game) {
    super(game, "Krosan Vorine", "Legions", "LGN");
  }
}

module.exports = KrosanVorine;
