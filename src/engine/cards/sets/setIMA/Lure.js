"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Lure extends UnimplementedCard {
  constructor (game) {
    super(game, "Lure", "Iconic Masters", "IMA");
  }
}

module.exports = Lure;
