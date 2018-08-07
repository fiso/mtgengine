"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireLacerator extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Lacerator", "Masters 25", "A25");
  }
}

module.exports = VampireLacerator;
