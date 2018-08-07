"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkofMutiny extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark of Mutiny", "Iconic Masters", "IMA");
  }
}

module.exports = MarkofMutiny;
