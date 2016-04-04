"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DaybreakCoronetBase = require("../setFUT/DaybreakCoronet.js");

class DaybreakCoronet extends DaybreakCoronetBase {
  constructor(game) {
    super(game, "Daybreak Coronet", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = DaybreakCoronet;
