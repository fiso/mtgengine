"use strict";
const Constants = require ("../../../Constants");
const HibernationBase = require("../set8ED/Hibernation");

class Hibernation extends HibernationBase {
  constructor(game) {
    super(game, "Hibernation", "Seventh Edition", "7ED");
  }
}

module.exports = Hibernation;
