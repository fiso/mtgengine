"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HashepOasis extends UnimplementedCard {
  constructor (game) {
    super(game, "Hashep Oasis", "Hour of Devastation", "HOU");
  }
}

module.exports = HashepOasis;
