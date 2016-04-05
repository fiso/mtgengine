"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VineKami extends UnimplementedCard {
  constructor(game) {
    super(game, "Vine Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = VineKami;
