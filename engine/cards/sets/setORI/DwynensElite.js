"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DwynensElite extends Card {
  constructor(game) {
    super(game, "Dwynen's Elite", "Magic Origins", "ORI");
  }
}

module.exports = DwynensElite;
