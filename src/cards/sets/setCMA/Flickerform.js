"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Flickerform extends UnimplementedCard {
  constructor (game) {
    super(game, "Flickerform", "Commander Anthology", "CMA");
  }
}

module.exports = Flickerform;
