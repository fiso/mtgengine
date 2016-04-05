"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeavyMattock extends UnimplementedCard {
  constructor(game) {
    super(game, "Heavy Mattock", "Dark Ascension", "DKA");
  }
}

module.exports = HeavyMattock;
