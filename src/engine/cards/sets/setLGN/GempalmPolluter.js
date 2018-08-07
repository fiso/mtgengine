"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GempalmPolluter extends UnimplementedCard {
  constructor (game) {
    super(game, "Gempalm Polluter", "Legions", "LGN");
  }
}

module.exports = GempalmPolluter;
