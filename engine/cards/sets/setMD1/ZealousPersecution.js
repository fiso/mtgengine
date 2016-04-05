"use strict";
const Constants = require ("../../../Constants");
const ZealousPersecutionBase = require("../setARB/ZealousPersecution");

class ZealousPersecution extends ZealousPersecutionBase {
  constructor(game) {
    super(game, "Zealous Persecution", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = ZealousPersecution;
