"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YamabushisStorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Yamabushi's Storm", "Champions of Kamigawa", "CHK");
  }
}

module.exports = YamabushisStorm;
