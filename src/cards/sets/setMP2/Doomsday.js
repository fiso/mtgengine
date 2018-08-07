"use strict";
const Constants = require ("../../../Constants");
const DoomsdayBase = require("../setA25/Doomsday");

class Doomsday extends DoomsdayBase {
  constructor (game) {
    super(game, "Doomsday", "Amonkhet Invocations", "MP2");
  }
}

module.exports = Doomsday;
