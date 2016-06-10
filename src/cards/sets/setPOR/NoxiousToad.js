"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoxiousToad extends UnimplementedCard {
  constructor (game) {
    super(game, "Noxious Toad", "Portal", "POR");
  }
}

module.exports = NoxiousToad;
