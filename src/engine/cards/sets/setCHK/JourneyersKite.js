"use strict";
const Constants = require ("../../../Constants");
const JourneyersKiteBase = require("../setDDI/JourneyersKite");

class JourneyersKite extends JourneyersKiteBase {
  constructor (game) {
    super(game, "Journeyer's Kite", "Champions of Kamigawa", "CHK");
  }
}

module.exports = JourneyersKite;
