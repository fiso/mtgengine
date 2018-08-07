"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Manifest extends UnimplementedCard {
  constructor (game) {
    super(game, "Manifest", "Commander 2018 Tokens", "TC18");
  }
}

module.exports = Manifest;
