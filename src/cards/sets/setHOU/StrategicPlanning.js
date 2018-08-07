"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrategicPlanning extends UnimplementedCard {
  constructor (game) {
    super(game, "Strategic Planning", "Hour of Devastation", "HOU");
  }
}

module.exports = StrategicPlanning;
