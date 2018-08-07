"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GhituWarCry extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghitu War Cry", "Urza's Legacy", "ULG");
  }
}

module.exports = GhituWarCry;
