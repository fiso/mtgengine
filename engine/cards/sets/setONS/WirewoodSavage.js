"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WirewoodSavageBase = require("../setDD3_GVL/WirewoodSavage.js");

class WirewoodSavage extends WirewoodSavageBase {
  constructor(game) {
    super(game, "Wirewood Savage", "Onslaught", "ONS");
  }
}

module.exports = WirewoodSavage;
