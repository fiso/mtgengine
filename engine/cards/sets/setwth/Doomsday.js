"use strict";
const Constants = require ("../../../Constants");
const DoomsdayBase = require("../set6ED/Doomsday");

class Doomsday extends DoomsdayBase {
  constructor(game) {
    super(game, "Doomsday", "Weatherlight", "WTH");
  }
}

module.exports = Doomsday;
