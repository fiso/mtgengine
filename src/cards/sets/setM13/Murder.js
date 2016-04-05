"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Murder extends UnimplementedCard {
  constructor(game) {
    super(game, "Murder", "Magic 2013", "M13");
  }
}

module.exports = Murder;
