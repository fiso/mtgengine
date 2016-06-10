"use strict";
const Constants = require ("../../../Constants");
const TormodsCryptBase = require("../setCHR/TormodsCrypt");

class TormodsCrypt extends TormodsCryptBase {
  constructor (game) {
    super(game, "Tormod's Crypt", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TormodsCrypt;
