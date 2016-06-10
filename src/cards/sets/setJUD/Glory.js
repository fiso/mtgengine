"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Glory extends UnimplementedCard {
  constructor (game) {
    super(game, "Glory", "Judgment", "JUD");
  }
}

module.exports = Glory;
