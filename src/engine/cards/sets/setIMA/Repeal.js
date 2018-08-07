"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repeal extends UnimplementedCard {
  constructor (game) {
    super(game, "Repeal", "Iconic Masters", "IMA");
  }
}

module.exports = Repeal;
