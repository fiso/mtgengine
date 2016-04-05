"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OreGorger extends UnimplementedCard {
  constructor(game) {
    super(game, "Ore Gorger", "Champions of Kamigawa", "CHK");
  }
}

module.exports = OreGorger;
