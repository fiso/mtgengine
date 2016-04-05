"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VillainousWealth extends UnimplementedCard {
  constructor(game) {
    super(game, "Villainous Wealth", "Khans of Tarkir", "KTK");
  }
}

module.exports = VillainousWealth;
