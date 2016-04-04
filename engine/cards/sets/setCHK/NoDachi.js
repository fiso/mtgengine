"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NoDachi extends UnimplementedCard {
  constructor(game) {
    super(game, "No-Dachi", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NoDachi;
