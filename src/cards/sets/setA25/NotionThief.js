"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NotionThief extends UnimplementedCard {
  constructor (game) {
    super(game, "Notion Thief", "Masters 25", "A25");
  }
}

module.exports = NotionThief;
