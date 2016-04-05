"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StoneRain extends UnimplementedCard {
  constructor(game) {
    super(game, "Stone Rain", "Champions of Kamigawa", "CHK");
  }
}

module.exports = StoneRain;
