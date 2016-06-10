"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Faultgrinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Faultgrinder", "Lorwyn", "LRW");
  }
}

module.exports = Faultgrinder;
