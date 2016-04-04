"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RasputinDreamweaverBase = require("../setLEG/RasputinDreamweaver.js");

class RasputinDreamweaver extends RasputinDreamweaverBase {
  constructor(game) {
    super(game, "Rasputin Dreamweaver", "Masters Edition III", "ME3");
  }
}

module.exports = RasputinDreamweaver;
