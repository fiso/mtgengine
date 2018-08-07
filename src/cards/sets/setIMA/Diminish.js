"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Diminish extends UnimplementedCard {
  constructor (game) {
    super(game, "Diminish", "Iconic Masters", "IMA");
  }
}

module.exports = Diminish;
