"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChildhoodHorror extends Card {
  constructor(game) {
    super(game, "Childhood Horror", "Odyssey", "ODY");
  }
}

module.exports = ChildhoodHorror;
