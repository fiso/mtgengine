"use strict";
const Constants = require ("../../../Constants");
const CultivatorofBladesBase = require("../setKLD/CultivatorofBlades");

class CultivatorofBlades extends CultivatorofBladesBase {
  constructor (game) {
    super(game, "Cultivator of Blades", "Magic Online Promos", "PRM");
  }
}

module.exports = CultivatorofBlades;
