"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lightbringer extends UnimplementedCard {
  constructor (game) {
    super(game, "Lightbringer", "Nemesis", "NEM");
  }
}

module.exports = Lightbringer;
