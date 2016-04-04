"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Faultgrinder extends Card {
  constructor(game) {
    super(game, "Faultgrinder", "Lorwyn", "LRW");
  }
}

module.exports = Faultgrinder;
