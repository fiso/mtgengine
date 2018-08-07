"use strict";
const Constants = require ("../../../Constants");
const DictateoftheTwinGodsBase = require("../setJOU/DictateoftheTwinGods");

class DictateoftheTwinGods extends DictateoftheTwinGodsBase {
  constructor (game) {
    super(game, "Dictate of the Twin Gods", "Magic Online Promos", "PRM");
  }
}

module.exports = DictateoftheTwinGods;
