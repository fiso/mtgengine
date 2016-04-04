"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarhaultElsdragonBase = require("../setCHR/MarhaultElsdragon.js");

class MarhaultElsdragon extends MarhaultElsdragonBase {
  constructor(game) {
    super(game, "Marhault Elsdragon", "Legends", "LEG");
  }
}

module.exports = MarhaultElsdragon;
