"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeirofFalkenrath extends UnimplementedCard {
  constructor(game) {
    super(game, "Heir of Falkenrath", "Shadows over Innistrad", "SOI");
  }
}

module.exports = HeirofFalkenrath;
