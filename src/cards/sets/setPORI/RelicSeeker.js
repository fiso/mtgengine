"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RelicSeeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Relic Seeker", "Magic Origins Promos", "PORI");
  }
}

module.exports = RelicSeeker;
