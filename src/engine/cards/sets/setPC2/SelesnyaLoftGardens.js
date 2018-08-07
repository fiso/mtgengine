"use strict";
const Constants = require ("../../../Constants");
const SelesnyaLoftGardensBase = require("../setPCA/SelesnyaLoftGardens");

class SelesnyaLoftGardens extends SelesnyaLoftGardensBase {
  constructor (game) {
    super(game, "Selesnya Loft Gardens", "Planechase 2012", "PC2");
  }
}

module.exports = SelesnyaLoftGardens;
