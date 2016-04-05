"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Carom extends UnimplementedCard {
  constructor(game) {
    super(game, "Carom", "Dissension", "DIS");
  }
}

module.exports = Carom;
