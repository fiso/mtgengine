"use strict";
const Constants = require ("../../../Constants");
const NotionThiefBase = require("../setA25/NotionThief");

class NotionThief extends NotionThiefBase {
  constructor (game) {
    super(game, "Notion Thief", "Dragon's Maze", "DGM");
  }
}

module.exports = NotionThief;
