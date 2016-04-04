"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Demand extends Card {
  constructor(game) {
    super(game, "Demand", "Dissension", "DIS");
  }
}

module.exports = Demand;
