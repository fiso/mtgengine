"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Murder extends UnimplementedCard {
  constructor (game) {
    super(game, "Murder", "Core Set 2019", "M19");
  }
}

module.exports = Murder;
