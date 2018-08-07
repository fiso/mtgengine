"use strict";
const Constants = require ("../../../Constants");
const HelmofKaldraBase = require("../set5DN/HelmofKaldra");

class HelmofKaldra extends HelmofKaldraBase {
  constructor (game) {
    super(game, "Helm of Kaldra", "Magic Online Promos", "PRM");
  }
}

module.exports = HelmofKaldra;
