"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MomentsPeace extends Card {
  constructor(game) {
    super(game, "Moment's Peace", "Odyssey", "ODY");
  }
}

module.exports = MomentsPeace;
