"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherStormBase = require("../set5ED/ÆtherStorm.js");

class ÆtherStorm extends ÆtherStormBase {
  constructor(game) {
    super(game, "Æther Storm", "Masters Edition II", "ME2");
  }
}

module.exports = ÆtherStorm;
