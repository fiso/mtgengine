"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TemurWarShamanBase = require("../setFRF/TemurWarShaman.js");

class TemurWarShaman extends TemurWarShamanBase {
  constructor(game) {
    super(game, "Temur War Shaman", "Media Inserts", "pMEI");
  }
}

module.exports = TemurWarShaman;
