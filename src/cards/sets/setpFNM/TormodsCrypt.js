"use strict";
const Constants = require ("../../../Constants");
const TormodsCryptBase = require("../setCHR/TormodsCrypt");

class TormodsCrypt extends TormodsCryptBase {
  constructor (game) {
    super(game, "Tormod's Crypt", "Friday Night Magic", "pFNM");
  }
}

module.exports = TormodsCrypt;
