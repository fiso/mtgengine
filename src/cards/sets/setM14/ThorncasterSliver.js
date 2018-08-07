"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThorncasterSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Thorncaster Sliver", "Magic 2014", "M14");
  }
}

module.exports = ThorncasterSliver;
