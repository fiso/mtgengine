"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flashfreeze extends UnimplementedCard {
  constructor (game) {
    super(game, "Flashfreeze", "Coldsnap", "CSP");
  }
}

module.exports = Flashfreeze;
