"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MizziumMeddler extends UnimplementedCard {
  constructor (game) {
    super(game, "Mizzium Meddler", "Magic Origins Promos", "PORI");
  }
}

module.exports = MizziumMeddler;
