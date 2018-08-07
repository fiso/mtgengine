"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CephalidConstable extends UnimplementedCard {
  constructor (game) {
    super(game, "Cephalid Constable", "Tenth Edition", "10E");
  }
}

module.exports = CephalidConstable;
