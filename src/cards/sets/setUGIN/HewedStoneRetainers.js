"use strict";
const Constants = require ("../../../Constants");
const HewedStoneRetainersBase = require("../setFRF/HewedStoneRetainers");

class HewedStoneRetainers extends HewedStoneRetainersBase {
  constructor (game) {
    super(game, "Hewed Stone Retainers", "Ugin's Fate", "UGIN");
  }
}

module.exports = HewedStoneRetainers;
