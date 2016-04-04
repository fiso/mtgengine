"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ReturnedCentaur extends Card {
  constructor(game) {
    super(game, "Returned Centaur", "Magic Origins", "ORI");
  }
}

module.exports = ReturnedCentaur;
