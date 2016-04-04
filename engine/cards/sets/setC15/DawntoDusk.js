"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DawntoDuskBase = require("../setBNG/DawntoDusk.js");

class DawntoDusk extends DawntoDuskBase {
  constructor(game) {
    super(game, "Dawn to Dusk", "Commander 2015", "C15");
  }
}

module.exports = DawntoDusk;
