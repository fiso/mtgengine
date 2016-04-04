"use strict";
const Constants = require ("../../../Constants");
const LastStandBase = require("../setAPC/LastStand");

class LastStand extends LastStandBase {
  constructor(game) {
    super(game, "Last Stand", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = LastStand;
