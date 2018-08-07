"use strict";
const Constants = require ("../../../Constants");
const DauthiSlayerBase = require("../setTPR/DauthiSlayer");

class DauthiSlayer extends DauthiSlayerBase {
  constructor (game) {
    super(game, "Dauthi Slayer", "Time Spiral Timeshifted", "TSB");
  }
}

module.exports = DauthiSlayer;
