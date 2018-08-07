"use strict";
const Constants = require ("../../../Constants");
const GwafaHazidProfiteerBase = require("../setBBD/GwafaHazidProfiteer");

class GwafaHazidProfiteer extends GwafaHazidProfiteerBase {
  constructor (game) {
    super(game, "Gwafa Hazid, Profiteer", "Commander 2016", "C16");
  }
}

module.exports = GwafaHazidProfiteer;
