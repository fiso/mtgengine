"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CavePeopleBase = require("../set5ED/CavePeople.js");

class CavePeople extends CavePeopleBase {
  constructor(game) {
    super(game, "Cave People", "Fourth Edition", "4ED");
  }
}

module.exports = CavePeople;
