"use strict";
const Constants = require ("../../../Constants");
const TabletofEpityrBase = require("../setME4/TabletofEpityr");

class TabletofEpityr extends TabletofEpityrBase {
  constructor (game) {
    super(game, "Tablet of Epityr", "Antiquities", "ATQ");
  }
}

module.exports = TabletofEpityr;
