"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YoungPyromancer extends UnimplementedCard {
  constructor (game) {
    super(game, "Young Pyromancer", "Magic 2014 Core Set", "M14");
  }
}

module.exports = YoungPyromancer;
