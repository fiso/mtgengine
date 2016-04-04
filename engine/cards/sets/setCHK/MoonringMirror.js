"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonringMirror extends UnimplementedCard {
  constructor(game) {
    super(game, "Moonring Mirror", "Champions of Kamigawa", "CHK");
  }
}

module.exports = MoonringMirror;
