"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShidakoBroodmistress extends UnimplementedCard {
  constructor (game) {
    super(game, "Shidako, Broodmistress", "Champions of Kamigawa", "CHK");
  }
}

module.exports = ShidakoBroodmistress;
