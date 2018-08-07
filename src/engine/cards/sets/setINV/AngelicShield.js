"use strict";
const Constants = require ("../../../Constants");
const AngelicShieldBase = require("../setDDI/AngelicShield");

class AngelicShield extends AngelicShieldBase {
  constructor (game) {
    super(game, "Angelic Shield", "Invasion", "INV");
  }
}

module.exports = AngelicShield;
