"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ReminisceBase = require("../setDDJ/Reminisce.js");

class Reminisce extends ReminisceBase {
  constructor(game) {
    super(game, "Reminisce", "Onslaught", "ONS");
  }
}

module.exports = Reminisce;
