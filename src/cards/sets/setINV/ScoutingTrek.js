"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScoutingTrek extends UnimplementedCard {
  constructor(game) {
    super(game, "Scouting Trek", "Invasion", "INV");
  }
}

module.exports = ScoutingTrek;
