"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvishLyrist extends UnimplementedCard {
  constructor (game) {
    super(game, "Elvish Lyrist", "Eighth Edition", "8ED");
  }
}

module.exports = ElvishLyrist;
