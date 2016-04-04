"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CarnophageBase = require("../setEXO/Carnophage.js");

class Carnophage extends CarnophageBase {
  constructor(game) {
    super(game, "Carnophage", "Vintage Masters", "VMA");
  }
}

module.exports = Carnophage;
