"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CemeteryReaper extends Card {
  constructor(game) {
    super(game, "Cemetery Reaper", "Archenemy", "ARC");
  }
}

module.exports = CemeteryReaper;
