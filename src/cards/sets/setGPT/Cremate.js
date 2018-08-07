"use strict";
const Constants = require ("../../../Constants");
const CremateBase = require("../setRTR/Cremate");

class Cremate extends CremateBase {
  constructor (game) {
    super(game, "Cremate", "Guildpact", "GPT");
  }
}

module.exports = Cremate;
