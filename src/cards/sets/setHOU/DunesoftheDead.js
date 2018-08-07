"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DunesoftheDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Dunes of the Dead", "Hour of Devastation", "HOU");
  }
}

module.exports = DunesoftheDead;
