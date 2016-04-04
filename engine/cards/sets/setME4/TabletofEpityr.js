"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TabletofEpityrBase = require("../setATQ/TabletofEpityr.js");

class TabletofEpityr extends TabletofEpityrBase {
  constructor(game) {
    super(game, "Tablet of Epityr", "Masters Edition IV", "ME4");
  }
}

module.exports = TabletofEpityr;
