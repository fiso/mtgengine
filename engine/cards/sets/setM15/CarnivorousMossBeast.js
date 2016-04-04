"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarnivorousMossBeast extends Card {
  constructor(game) {
    super(game, "Carnivorous Moss-Beast", "Magic 2015 Core Set", "M15");
  }
}

module.exports = CarnivorousMossBeast;
