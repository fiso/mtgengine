"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkofMutiny extends UnimplementedCard {
  constructor(game) {
    super(game, "Mark of Mutiny", "Magic 2013", "M13");
  }
}

module.exports = MarkofMutiny;
