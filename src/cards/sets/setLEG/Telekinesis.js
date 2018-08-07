"use strict";
const Constants = require ("../../../Constants");
const TelekinesisBase = require("../setMED/Telekinesis");

class Telekinesis extends TelekinesisBase {
  constructor (game) {
    super(game, "Telekinesis", "Legends", "LEG");
  }
}

module.exports = Telekinesis;
