"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GraveDefiler extends Card {
  constructor(game) {
    super(game, "Grave Defiler", "Apocalypse", "APC");
  }
}

module.exports = GraveDefiler;
