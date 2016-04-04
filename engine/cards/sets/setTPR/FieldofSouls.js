"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FieldofSoulsBase = require("../setDDK/FieldofSouls.js");

class FieldofSouls extends FieldofSoulsBase {
  constructor(game) {
    super(game, "Field of Souls", "Tempest Remastered", "TPR");
  }
}

module.exports = FieldofSouls;
