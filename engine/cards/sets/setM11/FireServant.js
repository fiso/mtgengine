"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireServant extends Card {
  constructor(game) {
    super(game, "Fire Servant", "Magic 2011", "M11");
  }
}

module.exports = FireServant;
