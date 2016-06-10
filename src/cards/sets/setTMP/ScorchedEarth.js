"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchedEarth extends UnimplementedCard {
  constructor (game) {
    super(game, "Scorched Earth", "Tempest", "TMP");
  }
}

module.exports = ScorchedEarth;
