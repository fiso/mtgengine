"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrypticAnnelidBase = require("../setDDI/CrypticAnnelid.js");

class CrypticAnnelid extends CrypticAnnelidBase {
  constructor(game) {
    super(game, "Cryptic Annelid", "Future Sight", "FUT");
  }
}

module.exports = CrypticAnnelid;
