"use strict";
const Constants = require ("../../../Constants");
const CarnophageBase = require("../setTPR/Carnophage");

class Carnophage extends CarnophageBase {
  constructor (game) {
    super(game, "Carnophage", "Exodus", "EXO");
  }
}

module.exports = Carnophage;
