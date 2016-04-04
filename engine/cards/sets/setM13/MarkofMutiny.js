"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarkofMutiny extends Card {
  constructor(game) {
    super(game, "Mark of Mutiny", "Magic 2013", "M13");
  }
}

module.exports = MarkofMutiny;
