"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const HanaKamiBase = require("../setCHK/HanaKami.js");

class HanaKami extends HanaKamiBase {
  constructor(game) {
    super(game, "Hana Kami", "Modern Masters", "MMA");
  }
}

module.exports = HanaKami;
