"use strict";
const Constants = require ("../../../Constants");
const ReminisceBase = require("../setDDJ/Reminisce");

class Reminisce extends ReminisceBase {
  constructor (game) {
    super(game, "Reminisce", "Tenth Edition", "10E");
  }
}

module.exports = Reminisce;
