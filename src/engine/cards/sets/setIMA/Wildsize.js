"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Wildsize extends UnimplementedCard {
  constructor (game) {
    super(game, "Wildsize", "Iconic Masters", "IMA");
  }
}

module.exports = Wildsize;
