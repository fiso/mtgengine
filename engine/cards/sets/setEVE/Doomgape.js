"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DoomgapeBase = require("../setDDJ/Doomgape.js");

class Doomgape extends DoomgapeBase {
  constructor(game) {
    super(game, "Doomgape", "Eventide", "EVE");
  }
}

module.exports = Doomgape;
