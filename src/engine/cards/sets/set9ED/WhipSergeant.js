"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhipSergeant extends UnimplementedCard {
  constructor (game) {
    super(game, "Whip Sergeant", "Ninth Edition", "9ED");
  }
}

module.exports = WhipSergeant;
