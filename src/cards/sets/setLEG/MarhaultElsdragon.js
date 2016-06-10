"use strict";
const Constants = require ("../../../Constants");
const MarhaultElsdragonBase = require("../setCHR/MarhaultElsdragon");

class MarhaultElsdragon extends MarhaultElsdragonBase {
  constructor (game) {
    super(game, "Marhault Elsdragon", "Legends", "LEG");
  }
}

module.exports = MarhaultElsdragon;
