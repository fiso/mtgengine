"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Incoming extends UnimplementedCard {
  constructor (game) {
    super(game, "Incoming!", "Unglued", "UGL");
  }
}

module.exports = Incoming;
