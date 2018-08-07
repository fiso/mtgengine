"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TinderWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Tinder Wall", "Masters Edition II", "ME2");
  }
}

module.exports = TinderWall;
