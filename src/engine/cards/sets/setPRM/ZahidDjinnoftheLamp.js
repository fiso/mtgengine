"use strict";
const Constants = require ("../../../Constants");
const ZahidDjinnoftheLampBase = require("../setDOM/ZahidDjinnoftheLamp");

class ZahidDjinnoftheLamp extends ZahidDjinnoftheLampBase {
  constructor (game) {
    super(game, "Zahid, Djinn of the Lamp", "Magic Online Promos", "PRM");
  }
}

module.exports = ZahidDjinnoftheLamp;
