"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChildrenofKorlis extends UnimplementedCard {
  constructor (game) {
    super(game, "Children of Korlis", "Time Spiral", "TSP");
  }
}

module.exports = ChildrenofKorlis;
