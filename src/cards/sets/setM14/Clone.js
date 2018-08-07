"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Clone extends UnimplementedCard {
  constructor (game) {
    super(game, "Clone", "Magic 2014", "M14");
  }
}

module.exports = Clone;
