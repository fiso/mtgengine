"use strict";
const Constants = require ("../../../Constants");
const RecklessRevelerBase = require("../setBBD/RecklessReveler");

class RecklessReveler extends RecklessRevelerBase {
  constructor (game) {
    super(game, "Reckless Reveler", "Born of the Gods", "BNG");
  }
}

module.exports = RecklessReveler;
