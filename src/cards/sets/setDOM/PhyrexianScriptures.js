"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianScriptures extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Scriptures", "Dominaria", "DOM");
  }
}

module.exports = PhyrexianScriptures;
