"use strict";
const Constants = require ("../../../Constants");
const ArashinWarBeastBase = require("../setFRF/ArashinWarBeast");

class ArashinWarBeast extends ArashinWarBeastBase {
  constructor (game) {
    super(game, "Arashin War Beast", "Ugin's Fate", "UGIN");
  }
}

module.exports = ArashinWarBeast;
