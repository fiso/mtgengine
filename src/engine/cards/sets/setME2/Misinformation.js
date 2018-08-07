"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Misinformation extends UnimplementedCard {
  constructor (game) {
    super(game, "Misinformation", "Masters Edition II", "ME2");
  }
}

module.exports = Misinformation;
