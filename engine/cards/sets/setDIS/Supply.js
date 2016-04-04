"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Supply extends Card {
  constructor(game) {
    super(game, "Supply", "Dissension", "DIS");
  }
}

module.exports = Supply;
