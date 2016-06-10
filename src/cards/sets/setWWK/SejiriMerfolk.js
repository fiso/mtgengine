"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SejiriMerfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Sejiri Merfolk", "Worldwake", "WWK");
  }
}

module.exports = SejiriMerfolk;
