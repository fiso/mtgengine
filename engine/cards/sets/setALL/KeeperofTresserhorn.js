"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KeeperofTresserhorn extends Card {
  constructor(game) {
    super(game, "Keeper of Tresserhorn", "Alliances", "ALL");
  }
}

module.exports = KeeperofTresserhorn;
