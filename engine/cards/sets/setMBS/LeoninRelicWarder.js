"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeoninRelicWarder extends Card {
  constructor(game) {
    super(game, "Leonin Relic-Warder", "Mirrodin Besieged", "MBS");
  }
}

module.exports = LeoninRelicWarder;
