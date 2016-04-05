"use strict";
const Constants = require ("../../../Constants");
const TelekinesisBase = require("../setLEG/Telekinesis");

class Telekinesis extends TelekinesisBase {
  constructor(game) {
    super(game, "Telekinesis", "Masters Edition", "MED");
  }
}

module.exports = Telekinesis;
