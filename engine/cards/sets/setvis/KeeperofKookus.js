"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeperofKookus extends Card {
  constructor(game) {
    super(game, "Keeper of Kookus", "Visions", "VIS");
  }
}

module.exports = KeeperofKookus;
