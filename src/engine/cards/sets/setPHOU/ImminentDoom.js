"use strict";
const Constants = require ("../../../Constants");
const ImminentDoomBase = require("../setHOU/ImminentDoom");

class ImminentDoom extends ImminentDoomBase {
  constructor (game) {
    super(game, "Imminent Doom", "Hour of Devastation Promos", "PHOU");
  }
}

module.exports = ImminentDoom;
