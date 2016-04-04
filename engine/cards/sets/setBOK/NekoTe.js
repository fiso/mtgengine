"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NekoTe extends UnimplementedCard {
  constructor(game) {
    super(game, "Neko-Te", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = NekoTe;
