"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LudevicsAbomination extends UnimplementedCard {
  constructor(game) {
    super(game, "Ludevic's Abomination", "Innistrad", "ISD");
  }
}

module.exports = LudevicsAbomination;
