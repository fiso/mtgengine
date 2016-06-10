"use strict";
const Constants = require ("../../../Constants");
const DormantVolcanoBase = require("../setC14/DormantVolcano");

class DormantVolcano extends DormantVolcanoBase {
  constructor (game) {
    super(game, "Dormant Volcano", "Visions", "VIS");
  }
}

module.exports = DormantVolcano;
