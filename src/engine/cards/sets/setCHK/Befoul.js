"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Befoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Befoul", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Befoul;
