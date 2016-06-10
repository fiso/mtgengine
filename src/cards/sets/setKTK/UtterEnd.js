"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UtterEnd extends UnimplementedCard {
  constructor (game) {
    super(game, "Utter End", "Khans of Tarkir", "KTK");
  }
}

module.exports = UtterEnd;
