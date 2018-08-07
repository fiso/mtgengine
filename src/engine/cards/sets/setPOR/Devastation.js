"use strict";
const Constants = require ("../../../Constants");
const DevastationBase = require("../setME4/Devastation");

class Devastation extends DevastationBase {
  constructor (game) {
    super(game, "Devastation", "Portal", "POR");
  }
}

module.exports = Devastation;
