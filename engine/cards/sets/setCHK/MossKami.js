"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MossKami extends UnimplementedCard {
  constructor(game) {
    super(game, "Moss Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MossKami;
