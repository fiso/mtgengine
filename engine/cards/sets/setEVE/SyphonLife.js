"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SyphonLife extends Card {
  constructor(game) {
    super(game, "Syphon Life", "Eventide", "EVE");
  }
}

module.exports = SyphonLife;
