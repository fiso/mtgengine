"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurAbomination extends UnimplementedCard {
  constructor (game) {
    super(game, "Minotaur Abomination", "Magic 2014 Core Set", "M14");
  }
}

module.exports = MinotaurAbomination;
