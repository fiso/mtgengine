"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InnocenceKami extends UnimplementedCard {
  constructor(game) {
    super(game, "Innocence Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = InnocenceKami;
