"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OblivionCrown extends Card {
  constructor(game) {
    super(game, "Oblivion Crown", "Future Sight", "FUT");
  }
}

module.exports = OblivionCrown;
