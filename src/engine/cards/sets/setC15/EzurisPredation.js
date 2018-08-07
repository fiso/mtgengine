"use strict";
const Constants = require ("../../../Constants");
const EzurisPredationBase = require("../setPZ1/EzurisPredation");

class EzurisPredation extends EzurisPredationBase {
  constructor (game) {
    super(game, "Ezuri's Predation", "Commander 2015", "C15");
  }
}

module.exports = EzurisPredation;
