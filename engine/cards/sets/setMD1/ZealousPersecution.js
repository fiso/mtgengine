"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ZealousPersecutionBase = require("../setARB/ZealousPersecution.js");

class ZealousPersecution extends ZealousPersecutionBase {
  constructor(game) {
    super(game, "Zealous Persecution", "Modern Event Deck 2014", "MD1");
  }
}

module.exports = ZealousPersecution;
