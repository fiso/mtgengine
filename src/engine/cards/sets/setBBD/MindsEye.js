"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MindsEye extends UnimplementedCard {
  constructor (game) {
    super(game, "Mind's Eye", "Battlebond", "BBD");
  }
}

module.exports = MindsEye;
