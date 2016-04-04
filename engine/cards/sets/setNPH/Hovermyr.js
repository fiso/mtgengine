"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hovermyr extends UnimplementedCard {
  constructor(game) {
    super(game, "Hovermyr", "New Phyrexia", "NPH");
  }
}

module.exports = Hovermyr;
