"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VillainousWealth extends Card {
  constructor(game) {
    super(game, "Villainous Wealth", "Khans of Tarkir", "KTK");
  }
}

module.exports = VillainousWealth;
