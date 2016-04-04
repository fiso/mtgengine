"use strict";
const Constants = require ("../../../Constants");
const TabletofEpityrBase = require("../setATQ/TabletofEpityr");

class TabletofEpityr extends TabletofEpityrBase {
  constructor(game) {
    super(game, "Tablet of Epityr", "Masters Edition IV", "ME4");
  }
}

module.exports = TabletofEpityr;
