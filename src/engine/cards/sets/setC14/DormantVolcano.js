"use strict";
const Constants = require ("../../../Constants");
const DormantVolcanoBase = require("../setCM2/DormantVolcano");

class DormantVolcano extends DormantVolcanoBase {
  constructor (game) {
    super(game, "Dormant Volcano", "Commander 2014", "C14");
  }
}

module.exports = DormantVolcano;
