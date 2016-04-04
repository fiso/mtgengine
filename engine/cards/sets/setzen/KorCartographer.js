"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorCartographerBase = require("../setDDI/KorCartographer.js");

class KorCartographer extends KorCartographerBase {
  constructor(game) {
    super(game, "Kor Cartographer", "Zendikar", "ZEN");
  }
}

module.exports = KorCartographer;
