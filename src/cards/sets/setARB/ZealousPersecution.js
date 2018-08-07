"use strict";
const Constants = require ("../../../Constants");
const ZealousPersecutionBase = require("../setE02/ZealousPersecution");

class ZealousPersecution extends ZealousPersecutionBase {
  constructor (game) {
    super(game, "Zealous Persecution", "Alara Reborn", "ARB");
  }
}

module.exports = ZealousPersecution;
