"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Python extends UnimplementedCard {
  constructor (game) {
    super(game, "Python", "Starter 2000", "S00");
  }
}

module.exports = Python;
