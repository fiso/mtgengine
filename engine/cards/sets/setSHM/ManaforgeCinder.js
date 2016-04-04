"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaforgeCinder extends Card {
  constructor(game) {
    super(game, "Manaforge Cinder", "Shadowmoor", "SHM");
  }
}

module.exports = ManaforgeCinder;
