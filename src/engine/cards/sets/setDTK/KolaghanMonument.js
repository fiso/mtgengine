"use strict";
const Constants = require ("../../../Constants");
const KolaghanMonumentBase = require("../setIMA/KolaghanMonument");

class KolaghanMonument extends KolaghanMonumentBase {
  constructor (game) {
    super(game, "Kolaghan Monument", "Dragons of Tarkir", "DTK");
  }
}

module.exports = KolaghanMonument;
