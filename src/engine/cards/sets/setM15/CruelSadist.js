"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CruelSadist extends UnimplementedCard {
  constructor (game) {
    super(game, "Cruel Sadist", "Magic 2015", "M15");
  }
}

module.exports = CruelSadist;
