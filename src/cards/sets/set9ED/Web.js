"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Web extends UnimplementedCard {
  constructor (game) {
    super(game, "Web", "Ninth Edition", "9ED");
  }
}

module.exports = Web;
