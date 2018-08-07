"use strict";
const Constants = require ("../../../Constants");
const CarnophageBase = require("../setTPR/Carnophage");

class Carnophage extends CarnophageBase {
  constructor (game) {
    super(game, "Carnophage", "Friday Night Magic 2001", "F01");
  }
}

module.exports = Carnophage;
