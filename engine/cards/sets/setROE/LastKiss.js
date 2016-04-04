"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LastKissBase = require("../setDDM/LastKiss.js");

class LastKiss extends LastKissBase {
  constructor(game) {
    super(game, "Last Kiss", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = LastKiss;
