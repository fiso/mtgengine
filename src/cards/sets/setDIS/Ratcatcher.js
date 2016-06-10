"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ratcatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Ratcatcher", "Dissension", "DIS");
  }
}

module.exports = Ratcatcher;
