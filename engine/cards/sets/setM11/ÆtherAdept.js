"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherAdeptBase = require("../setDDM/ÆtherAdept.js");

class ÆtherAdept extends ÆtherAdeptBase {
  constructor(game) {
    super(game, "Æther Adept", "Magic 2011", "M11");
  }
}

module.exports = ÆtherAdept;
