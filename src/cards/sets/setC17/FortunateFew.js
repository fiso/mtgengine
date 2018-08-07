"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortunateFew extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortunate Few", "Commander 2017", "C17");
  }
}

module.exports = FortunateFew;
