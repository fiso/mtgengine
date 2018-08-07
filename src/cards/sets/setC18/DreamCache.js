"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamCache extends UnimplementedCard {
  constructor (game) {
    super(game, "Dream Cache", "Commander 2018", "C18");
  }
}

module.exports = DreamCache;
