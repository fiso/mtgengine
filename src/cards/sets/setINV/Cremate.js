"use strict";
const Constants = require ("../../../Constants");
const CremateBase = require("../setGPT/Cremate");

class Cremate extends CremateBase {
  constructor (game) {
    super(game, "Cremate", "Invasion", "INV");
  }
}

module.exports = Cremate;
