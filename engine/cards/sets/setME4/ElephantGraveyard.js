"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElephantGraveyardBase = require("../setARN/ElephantGraveyard.js");

class ElephantGraveyard extends ElephantGraveyardBase {
  constructor(game) {
    super(game, "Elephant Graveyard", "Masters Edition IV", "ME4");
  }
}

module.exports = ElephantGraveyard;
