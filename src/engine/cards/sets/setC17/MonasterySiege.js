"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonasterySiege extends UnimplementedCard {
  constructor (game) {
    super(game, "Monastery Siege", "Commander 2017", "C17");
  }
}

module.exports = MonasterySiege;
