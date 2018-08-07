"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hammerhand extends UnimplementedCard {
  constructor (game) {
    super(game, "Hammerhand", "Iconic Masters", "IMA");
  }
}

module.exports = Hammerhand;
