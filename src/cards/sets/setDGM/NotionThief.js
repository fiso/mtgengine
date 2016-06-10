"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NotionThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Notion Thief", "Dragon's Maze", "DGM");
  }
}

module.exports = NotionThief;
