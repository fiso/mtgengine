"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VensersJournal extends Card {
  constructor(game) {
    super(game, "Venser's Journal", "Scars of Mirrodin", "SOM");
  }
}

module.exports = VensersJournal;
