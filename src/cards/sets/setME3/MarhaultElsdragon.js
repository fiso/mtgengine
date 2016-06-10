"use strict";
const Constants = require ("../../../Constants");
const MarhaultElsdragonBase = require("../setCHR/MarhaultElsdragon");

class MarhaultElsdragon extends MarhaultElsdragonBase {
  constructor (game) {
    super(game, "Marhault Elsdragon", "Masters Edition III", "ME3");
  }
}

module.exports = MarhaultElsdragon;
