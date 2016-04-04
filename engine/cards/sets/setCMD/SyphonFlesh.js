"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SyphonFlesh extends Card {
  constructor(game) {
    super(game, "Syphon Flesh", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SyphonFlesh;
