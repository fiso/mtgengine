"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RemoveSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Remove Soul", "Masters Edition III", "ME3");
  }
}

module.exports = RemoveSoul;
