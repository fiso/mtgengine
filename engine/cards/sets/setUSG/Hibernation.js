"use strict";
const Constants = require ("../../../Constants");
const HibernationBase = require("../set8ED/Hibernation");

class Hibernation extends HibernationBase {
  constructor(game) {
    super(game, "Hibernation", "Urza's Saga", "USG");
  }
}

module.exports = Hibernation;
