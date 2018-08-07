"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NewBlood extends UnimplementedCard {
  constructor (game) {
    super(game, "New Blood", "Commander 2017", "C17");
  }
}

module.exports = NewBlood;
