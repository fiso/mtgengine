"use strict";
const Constants = require ("../../../Constants");
const SerrasBlessingBase = require("../set9ED/SerrasBlessing");

class SerrasBlessing extends SerrasBlessingBase {
  constructor (game) {
    super(game, "Serra's Blessing", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SerrasBlessing;
