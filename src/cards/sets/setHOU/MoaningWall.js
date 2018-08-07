"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoaningWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Moaning Wall", "Hour of Devastation", "HOU");
  }
}

module.exports = MoaningWall;
