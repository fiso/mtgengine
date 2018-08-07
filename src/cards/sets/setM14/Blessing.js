"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blessing extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessing", "Magic 2014", "M14");
  }
}

module.exports = Blessing;
