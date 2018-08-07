"use strict";
const Constants = require ("../../../Constants");
const HyenaUmbraBase = require("../setPCA/HyenaUmbra");

class HyenaUmbra extends HyenaUmbraBase {
  constructor (game) {
    super(game, "Hyena Umbra", "Planechase 2012", "PC2");
  }
}

module.exports = HyenaUmbra;
