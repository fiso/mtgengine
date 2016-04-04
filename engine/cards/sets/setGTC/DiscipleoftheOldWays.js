"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiscipleoftheOldWays extends UnimplementedCard {
  constructor(game) {
    super(game, "Disciple of the Old Ways", "Gatecrash", "GTC");
  }
}

module.exports = DiscipleoftheOldWays;
