"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Murder extends UnimplementedCard {
  constructor (game) {
    super(game, "Murder", "Eldritch Moon", "EMN");
  }
}

module.exports = Murder;
