"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadReveler extends UnimplementedCard {
  constructor (game) {
    super(game, "Dead Reveler", "Iconic Masters", "IMA");
  }
}

module.exports = DeadReveler;
