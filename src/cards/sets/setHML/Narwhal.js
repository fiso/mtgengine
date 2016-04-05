"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Narwhal extends UnimplementedCard {
  constructor(game) {
    super(game, "Narwhal", "Homelands", "HML");
  }
}

module.exports = Narwhal;
