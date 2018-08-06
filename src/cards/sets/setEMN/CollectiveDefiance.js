"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CollectiveDefiance extends UnimplementedCard {
  constructor (game) {
    super(game, "Collective Defiance", "Eldritch Moon", "EMN");
  }
}

module.exports = CollectiveDefiance;
