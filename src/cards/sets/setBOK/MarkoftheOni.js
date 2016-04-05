"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkoftheOni extends UnimplementedCard {
  constructor(game) {
    super(game, "Mark of the Oni", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MarkoftheOni;
