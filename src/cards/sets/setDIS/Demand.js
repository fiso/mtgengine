"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demand extends UnimplementedCard {
  constructor (game) {
    super(game, "Demand", "Dissension", "DIS");
  }
}

module.exports = Demand;
