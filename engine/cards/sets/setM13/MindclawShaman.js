"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindclawShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Mindclaw Shaman", "Magic 2013", "M13");
  }
}

module.exports = MindclawShaman;
