"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunpetalGrove extends Card {
  constructor(game) {
    super(game, "Sunpetal Grove", "Magic 2010", "M10");
  }
}

module.exports = SunpetalGrove;
