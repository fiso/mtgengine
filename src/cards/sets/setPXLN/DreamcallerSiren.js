"use strict";
const Constants = require ("../../../Constants");
const DreamcallerSirenBase = require("../setXLN/DreamcallerSiren");

class DreamcallerSiren extends DreamcallerSirenBase {
  constructor (game) {
    super(game, "Dreamcaller Siren", "Ixalan Promos", "PXLN");
  }
}

module.exports = DreamcallerSiren;
