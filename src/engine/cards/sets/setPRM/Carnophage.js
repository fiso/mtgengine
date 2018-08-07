"use strict";
const Constants = require ("../../../Constants");
const CarnophageBase = require("../setTPR/Carnophage");

class Carnophage extends CarnophageBase {
  constructor (game) {
    super(game, "Carnophage", "Magic Online Promos", "PRM");
  }
}

module.exports = Carnophage;
