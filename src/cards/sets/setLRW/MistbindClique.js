"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistbindClique extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistbind Clique", "Lorwyn", "LRW");
  }
}

module.exports = MistbindClique;
