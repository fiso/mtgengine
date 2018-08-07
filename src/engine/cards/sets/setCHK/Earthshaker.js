"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthshaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Earthshaker", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Earthshaker;
