"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrikingSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Striking Sliver", "Magic 2014", "M14");
  }
}

module.exports = StrikingSliver;
