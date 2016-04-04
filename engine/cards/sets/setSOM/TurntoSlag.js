"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TurntoSlagBase = require("../setM13/TurntoSlag.js");

class TurntoSlag extends TurntoSlagBase {
  constructor(game) {
    super(game, "Turn to Slag", "Scars of Mirrodin", "SOM");
  }
}

module.exports = TurntoSlag;
