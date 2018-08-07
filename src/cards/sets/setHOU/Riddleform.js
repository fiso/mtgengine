"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Riddleform extends UnimplementedCard {
  constructor (game) {
    super(game, "Riddleform", "Hour of Devastation", "HOU");
  }
}

module.exports = Riddleform;
