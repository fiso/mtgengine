"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reweave extends UnimplementedCard {
  constructor (game) {
    super(game, "Reweave", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Reweave;
