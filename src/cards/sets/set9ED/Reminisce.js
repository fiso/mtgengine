"use strict";
const Constants = require ("../../../Constants");
const ReminisceBase = require("../setDDJ/Reminisce");

class Reminisce extends ReminisceBase {
  constructor(game) {
    super(game, "Reminisce", "Ninth Edition", "9ED");
  }
}

module.exports = Reminisce;
