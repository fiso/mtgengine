"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishMystic extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Mystic", "Commander 2014", "C14");
  }
}

module.exports = ElvishMystic;
