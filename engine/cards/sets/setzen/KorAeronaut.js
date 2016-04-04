"use strict";
const Constants = require ("../../../Constants");
const KorAeronautBase = require("../setDDF/KorAeronaut");

class KorAeronaut extends KorAeronautBase {
  constructor(game) {
    super(game, "Kor Aeronaut", "Zendikar", "ZEN");
  }
}

module.exports = KorAeronaut;
