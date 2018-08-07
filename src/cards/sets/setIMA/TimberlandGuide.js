"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TimberlandGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Timberland Guide", "Iconic Masters", "IMA");
  }
}

module.exports = TimberlandGuide;
