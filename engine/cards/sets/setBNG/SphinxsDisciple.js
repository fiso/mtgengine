"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SphinxsDisciple extends Card {
  constructor(game) {
    super(game, "Sphinx's Disciple", "Born of the Gods", "BNG");
  }
}

module.exports = SphinxsDisciple;
