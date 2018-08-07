"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Chandler extends UnimplementedCard {
  constructor (game) {
    super(game, "Chandler", "Homelands", "HML");
  }
}

module.exports = Chandler;
