"use strict";
const Constants = require ("../../../Constants");
const KorChantBase = require("../setTPR/KorChant");

class KorChant extends KorChantBase {
  constructor (game) {
    super(game, "Kor Chant", "Conspiracy", "CNS");
  }
}

module.exports = KorChant;
