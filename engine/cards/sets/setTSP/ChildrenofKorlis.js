"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChildrenofKorlis extends Card {
  constructor(game) {
    super(game, "Children of Korlis", "Time Spiral", "TSP");
  }
}

module.exports = ChildrenofKorlis;
