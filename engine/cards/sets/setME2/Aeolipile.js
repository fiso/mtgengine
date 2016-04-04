"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AeolipileBase = require("../setFEM/Aeolipile.js");

class Aeolipile extends AeolipileBase {
  constructor(game) {
    super(game, "Aeolipile", "Masters Edition II", "ME2");
  }
}

module.exports = Aeolipile;
