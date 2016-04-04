"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DragonGrip extends Card {
  constructor(game) {
    super(game, "Dragon Grip", "Khans of Tarkir", "KTK");
  }
}

module.exports = DragonGrip;
