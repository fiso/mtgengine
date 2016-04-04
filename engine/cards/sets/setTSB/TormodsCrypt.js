"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TormodsCryptBase = require("../setCHR/TormodsCrypt.js");

class TormodsCrypt extends TormodsCryptBase {
  constructor(game) {
    super(game, "Tormod's Crypt", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = TormodsCrypt;
