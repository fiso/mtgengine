"use strict";
const Constants = require ("../../../Constants");
const CrypticAnnelidBase = require("../setDDI/CrypticAnnelid");

class CrypticAnnelid extends CrypticAnnelidBase {
  constructor (game) {
    super(game, "Cryptic Annelid", "Future Sight", "FUT");
  }
}

module.exports = CrypticAnnelid;
