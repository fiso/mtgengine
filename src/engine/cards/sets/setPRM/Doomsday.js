"use strict";
const Constants = require ("../../../Constants");
const DoomsdayBase = require("../setA25/Doomsday");

class Doomsday extends DoomsdayBase {
  constructor (game) {
    super(game, "Doomsday", "Magic Online Promos", "PRM");
  }
}

module.exports = Doomsday;
