"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeasonoftheWitch extends UnimplementedCard {
  constructor(game) {
    super(game, "Season of the Witch", "The Dark", "DRK");
  }
}

module.exports = SeasonoftheWitch;
