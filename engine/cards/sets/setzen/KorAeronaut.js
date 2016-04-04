"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const KorAeronautBase = require("../setDDF/KorAeronaut.js");

class KorAeronaut extends KorAeronautBase {
  constructor(game) {
    super(game, "Kor Aeronaut", "Zendikar", "ZEN");
  }
}

module.exports = KorAeronaut;
