"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Scrapheap extends UnimplementedCard {
  constructor (game) {
    super(game, "Scrapheap", "Urza's Legacy", "ULG");
  }
}

module.exports = Scrapheap;
