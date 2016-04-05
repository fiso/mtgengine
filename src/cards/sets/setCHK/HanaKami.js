"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HanaKami extends UnimplementedCard {
  constructor(game) {
    super(game, "Hana Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HanaKami;
