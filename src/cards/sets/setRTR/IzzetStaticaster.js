"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IzzetStaticaster extends UnimplementedCard {
  constructor(game) {
    super(game, "Izzet Staticaster", "Return to Ravnica", "RTR");
  }
}

module.exports = IzzetStaticaster;
