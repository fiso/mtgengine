"use strict";
const Constants = require ("../../../Constants");
const GuardiansofAkrasaBase = require("../setM13/GuardiansofAkrasa");

class GuardiansofAkrasa extends GuardiansofAkrasaBase {
  constructor(game) {
    super(game, "Guardians of Akrasa", "Shards of Alara", "ALA");
  }
}

module.exports = GuardiansofAkrasa;
