"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheUnspeakable extends UnimplementedCard {
  constructor (game) {
    super(game, "The Unspeakable", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TheUnspeakable;
