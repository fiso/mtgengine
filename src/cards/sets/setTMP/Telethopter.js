"use strict";
const Constants = require ("../../../Constants");
const TelethopterBase = require("../setTPR/Telethopter");

class Telethopter extends TelethopterBase {
  constructor (game) {
    super(game, "Telethopter", "Tempest", "TMP");
  }
}

module.exports = Telethopter;
