"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Shrivel extends UnimplementedCard {
  constructor (game) {
    super(game, "Shrivel", "Magic 2014 Core Set", "M14");
  }
}

module.exports = Shrivel;
