"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TomoyatheRevealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Tomoya the Revealer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = TomoyatheRevealer;
