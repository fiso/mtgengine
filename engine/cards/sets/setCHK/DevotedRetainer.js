"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DevotedRetainer extends UnimplementedCard {
  constructor(game) {
    super(game, "Devoted Retainer", "Champions of Kamigawa", "CHK");
  }
}

module.exports = DevotedRetainer;
