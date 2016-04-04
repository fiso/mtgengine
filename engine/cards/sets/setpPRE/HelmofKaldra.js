"use strict";
const Constants = require ("../../../Constants");
const HelmofKaldraBase = require("../set5DN/HelmofKaldra");

class HelmofKaldra extends HelmofKaldraBase {
  constructor(game) {
    super(game, "Helm of Kaldra", "Prerelease Events", "pPRE");
  }
}

module.exports = HelmofKaldra;
