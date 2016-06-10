"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HungeringYeti extends UnimplementedCard {
  constructor (game) {
    super(game, "Hungering Yeti", "Fate Reforged", "FRF");
  }
}

module.exports = HungeringYeti;
