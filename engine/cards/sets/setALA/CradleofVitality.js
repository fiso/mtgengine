"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CradleofVitalityBase = require("../setC13/CradleofVitality.js");

class CradleofVitality extends CradleofVitalityBase {
  constructor(game) {
    super(game, "Cradle of Vitality", "Shards of Alara", "ALA");
  }
}

module.exports = CradleofVitality;
