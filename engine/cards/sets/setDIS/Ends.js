"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ends extends UnimplementedCard {
  constructor(game) {
    super(game, "Ends", "Dissension", "DIS");
  }
}

module.exports = Ends;
