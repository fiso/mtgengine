"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArashinWarBeastBase = require("../setFRF/ArashinWarBeast.js");

class ArashinWarBeast extends ArashinWarBeastBase {
  constructor(game) {
    super(game, "Arashin War Beast", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = ArashinWarBeast;
