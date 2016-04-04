"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpiritenDal extends Card {
  constructor(game) {
    super(game, "Spirit en-Dal", "Future Sight", "FUT");
  }
}

module.exports = SpiritenDal;
