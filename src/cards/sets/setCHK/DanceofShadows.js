"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DanceofShadows extends UnimplementedCard {
  constructor (game) {
    super(game, "Dance of Shadows", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DanceofShadows;
