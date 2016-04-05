"use strict";
const Constants = require ("../../../Constants");
const CarnophageBase = require("../setEXO/Carnophage");

class Carnophage extends CarnophageBase {
  constructor(game) {
    super(game, "Carnophage", "Tempest Remastered", "TPR");
  }
}

module.exports = Carnophage;
