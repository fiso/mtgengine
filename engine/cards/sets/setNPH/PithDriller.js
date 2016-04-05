"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PithDriller extends UnimplementedCard {
  constructor(game) {
    super(game, "Pith Driller", "New Phyrexia", "NPH");
  }
}

module.exports = PithDriller;
