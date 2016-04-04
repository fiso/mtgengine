"use strict";
const Constants = require ("../../../Constants");
const HanaKamiBase = require("../setCHK/HanaKami");

class HanaKami extends HanaKamiBase {
  constructor(game) {
    super(game, "Hana Kami", "Modern Masters", "MMA");
  }
}

module.exports = HanaKami;
