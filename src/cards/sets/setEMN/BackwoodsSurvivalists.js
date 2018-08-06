"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BackwoodsSurvivalists extends UnimplementedCard {
  constructor (game) {
    super(game, "Backwoods Survivalists", "Eldritch Moon", "EMN");
  }
}

module.exports = BackwoodsSurvivalists;
