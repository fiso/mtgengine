"use strict";
const Constants = require ("../../../Constants");
const ElephantGraveyardBase = require("../setME4/ElephantGraveyard");

class ElephantGraveyard extends ElephantGraveyardBase {
  constructor (game) {
    super(game, "Elephant Graveyard", "Arabian Nights", "ARN");
  }
}

module.exports = ElephantGraveyard;
