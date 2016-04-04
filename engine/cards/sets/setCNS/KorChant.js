"use strict";
const Constants = require ("../../../Constants");
const KorChantBase = require("../setEXO/KorChant");

class KorChant extends KorChantBase {
  constructor(game) {
    super(game, "Kor Chant", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = KorChant;
