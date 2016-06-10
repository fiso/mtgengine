"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DokaiWeaverofLife extends UnimplementedCard {
  constructor (game) {
    super(game, "Dokai, Weaver of Life", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DokaiWeaverofLife;
