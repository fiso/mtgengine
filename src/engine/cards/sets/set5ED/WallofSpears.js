"use strict";
const Constants = require ("../../../Constants");
const WallofSpearsBase = require("../setDPA/WallofSpears");

class WallofSpears extends WallofSpearsBase {
  constructor (game) {
    super(game, "Wall of Spears", "Fifth Edition", "5ED");
  }
}

module.exports = WallofSpears;
