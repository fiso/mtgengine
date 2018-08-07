"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CarnivorousMossBeast extends UnimplementedCard {
  constructor (game) {
    super(game, "Carnivorous Moss-Beast", "Magic 2015", "M15");
  }
}

module.exports = CarnivorousMossBeast;
