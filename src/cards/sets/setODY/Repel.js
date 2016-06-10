"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Repel extends UnimplementedCard {
  constructor (game) {
    super(game, "Repel", "Odyssey", "ODY");
  }
}

module.exports = Repel;
