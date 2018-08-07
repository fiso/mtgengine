"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conquer extends UnimplementedCard {
  constructor (game) {
    super(game, "Conquer", "Masters Edition II", "ME2");
  }
}

module.exports = Conquer;
