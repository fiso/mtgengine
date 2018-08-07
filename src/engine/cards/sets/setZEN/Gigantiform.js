"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Gigantiform extends UnimplementedCard {
  constructor (game) {
    super(game, "Gigantiform", "Zendikar", "ZEN");
  }
}

module.exports = Gigantiform;
