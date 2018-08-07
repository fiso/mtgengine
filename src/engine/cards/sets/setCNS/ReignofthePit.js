"use strict";
const Constants = require ("../../../Constants");
const ReignofthePitBase = require("../setVMA/ReignofthePit");

class ReignofthePit extends ReignofthePitBase {
  constructor (game) {
    super(game, "Reign of the Pit", "Conspiracy", "CNS");
  }
}

module.exports = ReignofthePit;
