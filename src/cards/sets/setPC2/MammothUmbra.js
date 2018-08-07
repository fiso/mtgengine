"use strict";
const Constants = require ("../../../Constants");
const MammothUmbraBase = require("../setPCA/MammothUmbra");

class MammothUmbra extends MammothUmbraBase {
  constructor (game) {
    super(game, "Mammoth Umbra", "Planechase 2012", "PC2");
  }
}

module.exports = MammothUmbra;
