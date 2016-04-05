"use strict";
const Constants = require ("../../../Constants");
const DevastationBase = require("../setME4/Devastation");

class Devastation extends DevastationBase {
  constructor(game) {
    super(game, "Devastation", "Starter 1999", "S99");
  }
}

module.exports = Devastation;
