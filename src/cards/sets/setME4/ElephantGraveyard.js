"use strict";
const Constants = require ("../../../Constants");
const ElephantGraveyardBase = require("../setARN/ElephantGraveyard");

class ElephantGraveyard extends ElephantGraveyardBase {
  constructor (game) {
    super(game, "Elephant Graveyard", "Masters Edition IV", "ME4");
  }
}

module.exports = ElephantGraveyard;
