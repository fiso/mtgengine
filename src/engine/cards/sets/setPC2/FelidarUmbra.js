"use strict";
const Constants = require ("../../../Constants");
const FelidarUmbraBase = require("../setPCA/FelidarUmbra");

class FelidarUmbra extends FelidarUmbraBase {
  constructor (game) {
    super(game, "Felidar Umbra", "Planechase 2012", "PC2");
  }
}

module.exports = FelidarUmbra;
