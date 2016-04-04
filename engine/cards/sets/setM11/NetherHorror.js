"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NetherHorror extends Card {
  constructor(game) {
    super(game, "Nether Horror", "Magic 2011", "M11");
  }
}

module.exports = NetherHorror;
