"use strict";
const Constants = require ("../../../Constants");
const ZealousPersecutionBase = require("../setARB/ZealousPersecution");

class ZealousPersecution extends ZealousPersecutionBase {
  constructor (game) {
    super(game, "Zealous Persecution", "Eternal Masters", "EMA");
  }
}

module.exports = ZealousPersecution;
