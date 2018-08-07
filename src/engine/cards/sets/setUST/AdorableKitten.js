"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AdorableKitten extends UnimplementedCard {
  constructor (game) {
    super(game, "Adorable Kitten", "Unstable", "UST");
  }
}

module.exports = AdorableKitten;
