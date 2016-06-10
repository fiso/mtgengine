"use strict";
const Constants = require ("../../../Constants");
const BorisDevilboonBase = require("../setLEG/BorisDevilboon");

class BorisDevilboon extends BorisDevilboonBase {
  constructor (game) {
    super(game, "Boris Devilboon", "Masters Edition III", "ME3");
  }
}

module.exports = BorisDevilboon;
