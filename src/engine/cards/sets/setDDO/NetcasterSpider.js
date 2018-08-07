"use strict";
const Constants = require ("../../../Constants");
const NetcasterSpiderBase = require("../setIMA/NetcasterSpider");

class NetcasterSpider extends NetcasterSpiderBase {
  constructor (game) {
    super(game, "Netcaster Spider", "Duel Decks: Elspeth vs. Kiora", "DDO");
  }
}

module.exports = NetcasterSpider;
