"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GuardiansofAkrasaBase = require("../setM13/GuardiansofAkrasa.js");

class GuardiansofAkrasa extends GuardiansofAkrasaBase {
  constructor(game) {
    super(game, "Guardians of Akrasa", "Shards of Alara", "ALA");
  }
}

module.exports = GuardiansofAkrasa;
