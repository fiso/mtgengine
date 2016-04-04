"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SelhoffOccultist extends Card {
  constructor(game) {
    super(game, "Selhoff Occultist", "Innistrad", "ISD");
  }
}

module.exports = SelhoffOccultist;
