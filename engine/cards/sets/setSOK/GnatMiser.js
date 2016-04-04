"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GnatMiser extends Card {
  constructor(game) {
    super(game, "Gnat Miser", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GnatMiser;
