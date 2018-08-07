"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ApocalypseDemon extends UnimplementedCard {
  constructor (game) {
    super(game, "Apocalypse Demon", "Hour of Devastation", "HOU");
  }
}

module.exports = ApocalypseDemon;
