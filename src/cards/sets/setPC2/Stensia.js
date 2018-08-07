"use strict";
const Constants = require ("../../../Constants");
const StensiaBase = require("../setPCA/Stensia");

class Stensia extends StensiaBase {
  constructor (game) {
    super(game, "Stensia", "Planechase 2012", "PC2");
  }
}

module.exports = Stensia;
