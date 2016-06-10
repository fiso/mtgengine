"use strict";
const Constants = require ("../../../Constants");
const TormodsCryptBase = require("../setCHR/TormodsCrypt");

class TormodsCrypt extends TormodsCryptBase {
  constructor (game) {
    super(game, "Tormod's Crypt", "Magic 2013", "M13");
  }
}

module.exports = TormodsCrypt;
