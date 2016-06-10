"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeasureofWickedness extends UnimplementedCard {
  constructor (game) {
    super(game, "Measure of Wickedness", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MeasureofWickedness;
