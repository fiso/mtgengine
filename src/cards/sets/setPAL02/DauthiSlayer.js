"use strict";
const Constants = require ("../../../Constants");
const DauthiSlayerBase = require("../setTPR/DauthiSlayer");

class DauthiSlayer extends DauthiSlayerBase {
  constructor (game) {
    super(game, "Dauthi Slayer", "Arena League 2002", "PAL02");
  }
}

module.exports = DauthiSlayer;
