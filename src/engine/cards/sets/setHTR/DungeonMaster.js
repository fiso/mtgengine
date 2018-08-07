"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DungeonMaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Dungeon Master", "2016 Heroes of the Realm", "HTR");
  }
}

module.exports = DungeonMaster;
