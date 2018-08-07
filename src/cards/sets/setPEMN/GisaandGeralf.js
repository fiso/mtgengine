"use strict";
const Constants = require ("../../../Constants");
const GisaandGeralfBase = require("../setEMN/GisaandGeralf");

class GisaandGeralf extends GisaandGeralfBase {
  constructor (game) {
    super(game, "Gisa and Geralf", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = GisaandGeralf;
