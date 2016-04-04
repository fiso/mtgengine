"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TelekinesisBase = require("../setLEG/Telekinesis.js");

class Telekinesis extends TelekinesisBase {
  constructor(game) {
    super(game, "Telekinesis", "Masters Edition", "MED");
  }
}

module.exports = Telekinesis;
