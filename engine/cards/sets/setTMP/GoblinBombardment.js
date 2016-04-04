"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinBombardmentBase = require("../setC13/GoblinBombardment.js");

class GoblinBombardment extends GoblinBombardmentBase {
  constructor(game) {
    super(game, "Goblin Bombardment", "Tempest", "TMP");
  }
}

module.exports = GoblinBombardment;
