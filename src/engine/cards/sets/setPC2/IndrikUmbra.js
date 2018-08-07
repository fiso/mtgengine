"use strict";
const Constants = require ("../../../Constants");
const IndrikUmbraBase = require("../setPCA/IndrikUmbra");

class IndrikUmbra extends IndrikUmbraBase {
  constructor (game) {
    super(game, "Indrik Umbra", "Planechase 2012", "PC2");
  }
}

module.exports = IndrikUmbra;
