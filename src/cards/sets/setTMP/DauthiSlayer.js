"use strict";
const Constants = require ("../../../Constants");
const DauthiSlayerBase = require("../setpARL/DauthiSlayer");

class DauthiSlayer extends DauthiSlayerBase {
  constructor (game) {
    super(game, "Dauthi Slayer", "Tempest", "TMP");
  }
}

module.exports = DauthiSlayer;
