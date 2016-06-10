"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuinGhost extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruin Ghost", "Worldwake", "WWK");
  }
}

module.exports = RuinGhost;
