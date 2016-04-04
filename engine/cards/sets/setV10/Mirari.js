"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MirariBase = require("../setC13/Mirari.js");

class Mirari extends MirariBase {
  constructor(game) {
    super(game, "Mirari", "From the Vault: Relics", "V10");
  }
}

module.exports = Mirari;
