"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squelch extends UnimplementedCard {
  constructor(game) {
    super(game, "Squelch", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Squelch;
