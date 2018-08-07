"use strict";
const Constants = require ("../../../Constants");
const BoarUmbraBase = require("../setPCA/BoarUmbra");

class BoarUmbra extends BoarUmbraBase {
  constructor (game) {
    super(game, "Boar Umbra", "Planechase 2012", "PC2");
  }
}

module.exports = BoarUmbra;
