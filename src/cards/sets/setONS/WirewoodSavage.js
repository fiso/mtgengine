"use strict";
const Constants = require ("../../../Constants");
const WirewoodSavageBase = require("../setDD3_GVL/WirewoodSavage");

class WirewoodSavage extends WirewoodSavageBase {
  constructor(game) {
    super(game, "Wirewood Savage", "Onslaught", "ONS");
  }
}

module.exports = WirewoodSavage;
