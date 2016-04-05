"use strict";
const Constants = require ("../../../Constants");
const TemurWarShamanBase = require("../setFRF/TemurWarShaman");

class TemurWarShaman extends TemurWarShamanBase {
  constructor(game) {
    super(game, "Temur War Shaman", "Media Inserts", "pMEI");
  }
}

module.exports = TemurWarShaman;
