"use strict";
const Constants = require ("../../../Constants");
const GriselbrandBase = require("../setMM3/Griselbrand");

class Griselbrand extends GriselbrandBase {
  constructor (game) {
    super(game, "Griselbrand", "Avacyn Restored", "AVR");
  }
}

module.exports = Griselbrand;
