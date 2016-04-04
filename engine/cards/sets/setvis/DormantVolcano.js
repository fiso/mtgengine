"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DormantVolcanoBase = require("../setC14/DormantVolcano.js");

class DormantVolcano extends DormantVolcanoBase {
  constructor(game) {
    super(game, "Dormant Volcano", "Visions", "VIS");
  }
}

module.exports = DormantVolcano;
