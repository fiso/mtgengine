"use strict";
const Constants = require ("../../../Constants");
const SerrasBlessingBase = require("../set6ED/SerrasBlessing");

class SerrasBlessing extends SerrasBlessingBase {
  constructor(game) {
    super(game, "Serra's Blessing", "Ninth Edition", "9ED");
  }
}

module.exports = SerrasBlessing;
