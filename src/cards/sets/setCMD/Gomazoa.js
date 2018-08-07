"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gomazoa extends UnimplementedCard {
  constructor (game) {
    super(game, "Gomazoa", "Commander 2011", "CMD");
  }
}

module.exports = Gomazoa;
