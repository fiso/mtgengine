"use strict";
const Constants = require ("../../../Constants");
const CavePeopleBase = require("../set5ED/CavePeople");

class CavePeople extends CavePeopleBase {
  constructor (game) {
    super(game, "Cave People", "Fourth Edition", "4ED");
  }
}

module.exports = CavePeople;
