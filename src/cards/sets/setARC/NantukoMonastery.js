"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NantukoMonastery extends UnimplementedCard {
  constructor (game) {
    super(game, "Nantuko Monastery", "Archenemy", "ARC");
  }
}

module.exports = NantukoMonastery;
