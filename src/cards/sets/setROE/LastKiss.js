"use strict";
const Constants = require ("../../../Constants");
const LastKissBase = require("../setDDM/LastKiss");

class LastKiss extends LastKissBase {
  constructor (game) {
    super(game, "Last Kiss", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LastKiss;
