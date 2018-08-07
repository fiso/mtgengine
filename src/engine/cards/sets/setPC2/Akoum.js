"use strict";
const Constants = require ("../../../Constants");
const AkoumBase = require("../setPCA/Akoum");

class Akoum extends AkoumBase {
  constructor (game) {
    super(game, "Akoum", "Planechase 2012", "PC2");
  }
}

module.exports = Akoum;
