"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmptyCityRuse extends Card {
  constructor(game) {
    super(game, "Empty City Ruse", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = EmptyCityRuse;
