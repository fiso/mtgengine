"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhonassStalwart extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhonas's Stalwart", "Hour of Devastation", "HOU");
  }
}

module.exports = RhonassStalwart;
