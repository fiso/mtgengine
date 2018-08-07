"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cogmentor extends UnimplementedCard {
  constructor (game) {
    super(game, "Cogmentor", "Unstable", "UST");
  }
}

module.exports = Cogmentor;
