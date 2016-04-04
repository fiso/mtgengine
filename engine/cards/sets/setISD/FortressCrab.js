"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FortressCrab extends Card {
  constructor(game) {
    super(game, "Fortress Crab", "Innistrad", "ISD");
  }
}

module.exports = FortressCrab;
