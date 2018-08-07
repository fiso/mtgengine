"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GimmeFive extends UnimplementedCard {
  constructor (game) {
    super(game, "Gimme Five", "Unstable", "UST");
  }
}

module.exports = GimmeFive;
