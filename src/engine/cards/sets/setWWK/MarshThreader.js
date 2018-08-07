"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarshThreader extends UnimplementedCard {
  constructor (game) {
    super(game, "Marsh Threader", "Worldwake", "WWK");
  }
}

module.exports = MarshThreader;
