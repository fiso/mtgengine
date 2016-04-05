"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SecondWind extends UnimplementedCard {
  constructor(game) {
    super(game, "Second Wind", "Future Sight", "FUT");
  }
}

module.exports = SecondWind;
