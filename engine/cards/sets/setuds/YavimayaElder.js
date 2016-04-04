"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const YavimayaElderBase = require("../setDDE/YavimayaElder.js");

class YavimayaElder extends YavimayaElderBase {
  constructor(game) {
    super(game, "Yavimaya Elder", "Urza's Destiny", "UDS");
  }
}

module.exports = YavimayaElder;
