"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HeartofYavimayaBase = require("../setALL/HeartofYavimaya.js");

class HeartofYavimaya extends HeartofYavimayaBase {
  constructor(game) {
    super(game, "Heart of Yavimaya", "Masters Edition II", "ME2");
  }
}

module.exports = HeartofYavimaya;
