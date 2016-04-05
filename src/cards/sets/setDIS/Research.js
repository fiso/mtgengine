"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Research extends UnimplementedCard {
  constructor(game) {
    super(game, "Research", "Dissension", "DIS");
  }
}

module.exports = Research;
