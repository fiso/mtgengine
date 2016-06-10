"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SphinxsDisciple extends UnimplementedCard {
  constructor (game) {
    super(game, "Sphinx's Disciple", "Born of the Gods", "BNG");
  }
}

module.exports = SphinxsDisciple;
