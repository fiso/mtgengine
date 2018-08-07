"use strict";
const Constants = require ("../../../Constants");
const TormodsCryptBase = require("../setC14/TormodsCrypt");

class TormodsCrypt extends TormodsCryptBase {
  constructor (game) {
    super(game, "Tormod's Crypt", "Friday Night Magic 2008", "F08");
  }
}

module.exports = TormodsCrypt;
