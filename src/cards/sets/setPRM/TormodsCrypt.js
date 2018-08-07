"use strict";
const Constants = require ("../../../Constants");
const TormodsCryptBase = require("../setC14/TormodsCrypt");

class TormodsCrypt extends TormodsCryptBase {
  constructor (game) {
    super(game, "Tormod's Crypt", "Magic Online Promos", "PRM");
  }
}

module.exports = TormodsCrypt;
