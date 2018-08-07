"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TwoHeadedZombie extends UnimplementedCard {
  constructor (game) {
    super(game, "Two-Headed Zombie", "Core Set 2019", "M19");
  }
}

module.exports = TwoHeadedZombie;
