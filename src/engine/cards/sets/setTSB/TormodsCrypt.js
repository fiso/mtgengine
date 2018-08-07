"use strict";
const Constants = require ("../../../Constants");
const TormodsCryptBase = require("../setC14/TormodsCrypt");

class TormodsCrypt extends TormodsCryptBase {
  constructor (game) {
    super(game, "Tormod's Crypt", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = TormodsCrypt;
