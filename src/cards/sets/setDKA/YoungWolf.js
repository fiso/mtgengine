"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class YoungWolf extends UnimplementedCard {
  constructor (game) {
    super(game, "Young Wolf", "Dark Ascension", "DKA");
  }
}

module.exports = YoungWolf;
