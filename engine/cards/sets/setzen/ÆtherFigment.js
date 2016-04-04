"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ÆtherFigmentBase = require("../setDDM/ÆtherFigment.js");

class ÆtherFigment extends ÆtherFigmentBase {
  constructor(game) {
    super(game, "Æther Figment", "Zendikar", "ZEN");
  }
}

module.exports = ÆtherFigment;
