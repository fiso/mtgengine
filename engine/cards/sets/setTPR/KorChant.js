"use strict";
const Constants = require ("../../../Constants");
const KorChantBase = require("../setEXO/KorChant");

class KorChant extends KorChantBase {
  constructor(game) {
    super(game, "Kor Chant", "Tempest Remastered", "TPR");
  }
}

module.exports = KorChant;
