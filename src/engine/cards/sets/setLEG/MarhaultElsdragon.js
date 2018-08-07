"use strict";
const Constants = require ("../../../Constants");
const MarhaultElsdragonBase = require("../setME3/MarhaultElsdragon");

class MarhaultElsdragon extends MarhaultElsdragonBase {
  constructor (game) {
    super(game, "Marhault Elsdragon", "Legends", "LEG");
  }
}

module.exports = MarhaultElsdragon;
