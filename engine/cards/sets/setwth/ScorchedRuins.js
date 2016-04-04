"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScorchedRuins extends UnimplementedCard {
  constructor(game) {
    super(game, "Scorched Ruins", "Weatherlight", "WTH");
  }
}

module.exports = ScorchedRuins;
