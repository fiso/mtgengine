"use strict";
const Constants = require ("../../../Constants");
const CradleofVitalityBase = require("../setC13/CradleofVitality");

class CradleofVitality extends CradleofVitalityBase {
  constructor (game) {
    super(game, "Cradle of Vitality", "Shards of Alara", "ALA");
  }
}

module.exports = CradleofVitality;
