"use strict";
const Constants = require ("../../../Constants");
const LastStandBase = require("../setPCA/LastStand");

class LastStand extends LastStandBase {
  constructor (game) {
    super(game, "Last Stand", "Apocalypse", "APC");
  }
}

module.exports = LastStand;
