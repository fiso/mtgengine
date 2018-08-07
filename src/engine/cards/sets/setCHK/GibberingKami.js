"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GibberingKami extends UnimplementedCard {
  constructor (game) {
    super(game, "Gibbering Kami", "Champions of Kamigawa", "CHK");
  }
}

module.exports = GibberingKami;
