"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LastStandBase = require("../setAPC/LastStand.js");

class LastStand extends LastStandBase {
  constructor(game) {
    super(game, "Last Stand", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = LastStand;
