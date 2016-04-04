"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CancelBase = require("../setDPA/Cancel.js");

class Cancel extends CancelBase {
  constructor(game) {
    super(game, "Cancel", "Zendikar", "ZEN");
  }
}

module.exports = Cancel;
