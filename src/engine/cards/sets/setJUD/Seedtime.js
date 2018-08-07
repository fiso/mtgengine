"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Seedtime extends UnimplementedCard {
  constructor (game) {
    super(game, "Seedtime", "Judgment", "JUD");
  }
}

module.exports = Seedtime;
