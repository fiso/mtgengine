"use strict";
const Constants = require ("../../../Constants");
const CarnophageBase = require("../setTPR/Carnophage");

class Carnophage extends CarnophageBase {
  constructor (game) {
    super(game, "Carnophage", "Vintage Masters", "VMA");
  }
}

module.exports = Carnophage;
