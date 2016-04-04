"use strict";
const Constants = require ("../../../Constants");
const RasputinDreamweaverBase = require("../setLEG/RasputinDreamweaver");

class RasputinDreamweaver extends RasputinDreamweaverBase {
  constructor(game) {
    super(game, "Rasputin Dreamweaver", "Masters Edition III", "ME3");
  }
}

module.exports = RasputinDreamweaver;
