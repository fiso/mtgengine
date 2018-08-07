"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IronshellBeetle extends UnimplementedCard {
  constructor (game) {
    super(game, "Ironshell Beetle", "Judgment", "JUD");
  }
}

module.exports = IronshellBeetle;
