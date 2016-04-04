"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeftbladeEliteBase = require("../setLGN/DeftbladeElite.js");

class DeftbladeElite extends DeftbladeEliteBase {
  constructor(game) {
    super(game, "Deftblade Elite", "Vintage Masters", "VMA");
  }
}

module.exports = DeftbladeElite;
