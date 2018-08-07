"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Enervate extends UnimplementedCard {
  constructor (game) {
    super(game, "Enervate", "Masters Edition II", "ME2");
  }
}

module.exports = Enervate;
