"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CancelBase = require("../setDPA/Cancel.js");

class Cancel extends CancelBase {
  constructor(game) {
    super(game, "Cancel", "Tenth Edition", "10E");
  }
}

module.exports = Cancel;
