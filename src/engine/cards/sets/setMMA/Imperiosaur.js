"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Imperiosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Imperiosaur", "Modern Masters", "MMA");
  }
}

module.exports = Imperiosaur;
