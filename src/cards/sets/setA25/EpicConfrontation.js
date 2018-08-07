"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpicConfrontation extends UnimplementedCard {
  constructor (game) {
    super(game, "Epic Confrontation", "Masters 25", "A25");
  }
}

module.exports = EpicConfrontation;
