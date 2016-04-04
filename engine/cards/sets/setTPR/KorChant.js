"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorChantBase = require("../setEXO/KorChant.js");

class KorChant extends KorChantBase {
  constructor(game) {
    super(game, "Kor Chant", "Tempest Remastered", "TPR");
  }
}

module.exports = KorChant;
