"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AssaultFormation extends Card {
  constructor(game) {
    super(game, "Assault Formation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AssaultFormation;
