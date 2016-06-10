"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EpicConfrontation extends UnimplementedCard {
  constructor (game) {
    super(game, "Epic Confrontation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = EpicConfrontation;
