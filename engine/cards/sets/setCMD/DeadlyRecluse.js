"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeadlyRecluseBase = require("../setDDL/DeadlyRecluse.js");

class DeadlyRecluse extends DeadlyRecluseBase {
  constructor(game) {
    super(game, "Deadly Recluse", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DeadlyRecluse;
