"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AirServant extends Card {
  constructor(game) {
    super(game, "Air Servant", "Magic 2011", "M11");
  }
}

module.exports = AirServant;
