"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StromkirkCaptain extends UnimplementedCard {
  constructor (game) {
    super(game, "Stromkirk Captain", "Commander 2017", "C17");
  }
}

module.exports = StromkirkCaptain;
