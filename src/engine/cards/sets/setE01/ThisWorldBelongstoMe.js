"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThisWorldBelongstoMe extends UnimplementedCard {
  constructor (game) {
    super(game, "This World Belongs to Me", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = ThisWorldBelongstoMe;
