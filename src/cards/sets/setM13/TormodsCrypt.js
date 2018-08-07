"use strict";
const Constants = require ("../../../Constants");
const TormodsCryptBase = require("../setC14/TormodsCrypt");

class TormodsCrypt extends TormodsCryptBase {
  constructor (game) {
    super(game, "Tormod's Crypt", "Magic 2013", "M13");
  }
}

module.exports = TormodsCrypt;
