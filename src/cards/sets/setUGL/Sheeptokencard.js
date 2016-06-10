"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sheeptokencard extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheep token card", "Unglued", "UGL");
  }
}

module.exports = Sheeptokencard;
