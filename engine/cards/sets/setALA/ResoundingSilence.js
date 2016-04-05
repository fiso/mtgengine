"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ResoundingSilence extends UnimplementedCard {
  constructor(game) {
    super(game, "Resounding Silence", "Shards of Alara", "ALA");
  }
}

module.exports = ResoundingSilence;
