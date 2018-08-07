"use strict";
const Constants = require ("../../../Constants");
const RasputinDreamweaverBase = require("../setME3/RasputinDreamweaver");

class RasputinDreamweaver extends RasputinDreamweaverBase {
  constructor (game) {
    super(game, "Rasputin Dreamweaver", "Legends", "LEG");
  }
}

module.exports = RasputinDreamweaver;
