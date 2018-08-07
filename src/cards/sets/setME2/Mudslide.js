"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mudslide extends UnimplementedCard {
  constructor (game) {
    super(game, "Mudslide", "Masters Edition II", "ME2");
  }
}

module.exports = Mudslide;
