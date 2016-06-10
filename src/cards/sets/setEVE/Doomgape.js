"use strict";
const Constants = require ("../../../Constants");
const DoomgapeBase = require("../setDDJ/Doomgape");

class Doomgape extends DoomgapeBase {
  constructor (game) {
    super(game, "Doomgape", "Eventide", "EVE");
  }
}

module.exports = Doomgape;
