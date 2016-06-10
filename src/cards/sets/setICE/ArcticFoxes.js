"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcticFoxes extends UnimplementedCard {
  constructor (game) {
    super(game, "Arctic Foxes", "Ice Age", "ICE");
  }
}

module.exports = ArcticFoxes;
