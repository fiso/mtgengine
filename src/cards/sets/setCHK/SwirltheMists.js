"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SwirltheMists extends UnimplementedCard {
  constructor (game) {
    super(game, "Swirl the Mists", "Champions of Kamigawa", "CHK");
  }
}

module.exports = SwirltheMists;
