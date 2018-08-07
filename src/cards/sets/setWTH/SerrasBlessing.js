"use strict";
const Constants = require ("../../../Constants");
const SerrasBlessingBase = require("../set9ED/SerrasBlessing");

class SerrasBlessing extends SerrasBlessingBase {
  constructor (game) {
    super(game, "Serra's Blessing", "Weatherlight", "WTH");
  }
}

module.exports = SerrasBlessing;
