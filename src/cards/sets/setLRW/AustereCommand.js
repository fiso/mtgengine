"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AustereCommand extends UnimplementedCard {
  constructor (game) {
    super(game, "Austere Command", "Lorwyn", "LRW");
  }
}

module.exports = AustereCommand;
