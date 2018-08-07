"use strict";
const Constants = require ("../../../Constants");
const DormantVolcanoBase = require("../setCM2/DormantVolcano");

class DormantVolcano extends DormantVolcanoBase {
  constructor (game) {
    super(game, "Dormant Volcano", "Visions", "VIS");
  }
}

module.exports = DormantVolcano;
