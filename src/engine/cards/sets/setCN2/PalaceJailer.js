"use strict";
const Constants = require ("../../../Constants");
const PalaceJailerBase = require("../setPZ2/PalaceJailer");

class PalaceJailer extends PalaceJailerBase {
  constructor (game) {
    super(game, "Palace Jailer", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = PalaceJailer;
