"use strict";
const Constants = require ("../../../Constants");
const DoomsdayBase = require("../setA25/Doomsday");

class Doomsday extends DoomsdayBase {
  constructor (game) {
    super(game, "Doomsday", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Doomsday;
