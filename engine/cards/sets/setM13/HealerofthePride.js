"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealerofthePride extends UnimplementedCard {
  constructor(game) {
    super(game, "Healer of the Pride", "Magic 2013", "M13");
  }
}

module.exports = HealerofthePride;
