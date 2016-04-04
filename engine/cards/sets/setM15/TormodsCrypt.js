"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TormodsCryptBase = require("../setCHR/TormodsCrypt.js");

class TormodsCrypt extends TormodsCryptBase {
  constructor(game) {
    super(game, "Tormod's Crypt", "Magic 2015 Core Set", "M15");
  }
}

module.exports = TormodsCrypt;
