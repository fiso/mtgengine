"use strict";
const Constants = require ("../../../Constants");
const KrosanVorineBase = require("../setLGN/KrosanVorine");

class KrosanVorine extends KrosanVorineBase {
  constructor (game) {
    super(game, "Krosan Vorine", "Vintage Masters", "VMA");
  }
}

module.exports = KrosanVorine;
